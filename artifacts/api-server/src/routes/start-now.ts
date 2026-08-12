import { Router, type IRouter, type Request, type Response } from "express";
import { z } from "zod";
import { Resend } from "resend";
import { db } from "@workspace/db";
import { startNowSubmissions } from "@workspace/db/schema";
import { logger } from "../lib/logger";

// ---------------------------------------------------------------------------
// Zod schema — duplicated from frontend (no shared manual schema package yet)
// TODO: extract into a shared @workspace/api-zod manual schema once the
//       orval-generated pattern supports manual additions.
// ---------------------------------------------------------------------------
export const startNowSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  codebaseSize: z.string().optional(),
  techStack: z.string().optional(),
  message: z.string().max(2000, "Message must be under 2000 characters").optional(),
  website: z.string().optional(), // honeypot
});

export type StartNowPayload = z.infer<typeof startNowSchema>;

// ---------------------------------------------------------------------------
// Naive in-memory rate limiter (max 5 submissions per IP per hour)
// ---------------------------------------------------------------------------
const ipSubmissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipSubmissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  ipSubmissions.set(ip, timestamps);

  if (timestamps.length >= RATE_LIMIT_MAX) {
    logger.warn({ ip, count: timestamps.length }, "Rate limit exceeded for start-now");
    return true;
  }

  timestamps.push(now);
  return false;
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------
const router: IRouter = Router();

router.post("/start-now", async (req: Request, res: Response) => {
  // Parse & validate
  const parsed = startNowSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      error: "Validation failed",
      issues: parsed.error.issues,
    });
    return;
  }

  const data = parsed.data;

  // Honeypot check — silently accept and drop
  if (data.website) {
    res.status(204).send();
    return;
  }

  // Rate limit
  const clientIp = req.ip ?? "unknown";
  if (isRateLimited(clientIp)) {
    res.status(429).json({ error: "Too many submissions. Please try again later." });
    return;
  }

  const submittedAt = new Date();

  // Persist to DB first (safety net)
  let submissionId: string | undefined;
  try {
    const [row] = await db
      .insert(startNowSubmissions)
      .values({
        name: data.name,
        email: data.email,
        company: data.company,
        codebaseSize: data.codebaseSize ?? null,
        techStack: data.techStack ?? null,
        message: data.message ?? null,
        sourceIp: clientIp,
      })
      .returning({ id: startNowSubmissions.id });
    submissionId = row?.id;
    logger.info({ submissionId }, "Start-now submission persisted");
  } catch (err) {
    logger.error({ err }, "Failed to persist start-now submission to DB");
    // Continue — email delivery is still valuable even if DB fails
  }

  // Send email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.START_NOW_TO_EMAIL ?? "chris@vtwo.co";
  const fromEmail = process.env.START_NOW_FROM_EMAIL ?? "noreply@vtwo.co";

  if (!resendApiKey) {
    logger.error(
      "RESEND_API_KEY is not set — email will NOT be sent. Submission saved to DB.",
    );
    res.status(202).json({
      message: "Thanks — your submission has been received.",
      id: submissionId,
    });
    return;
  }

  try {
    const resend = new Resend(resendApiKey);

    const subject = `[Evolve Start Now] ${data.name} from ${data.company}`;

    const textBody = `New Start Now submission from the V.Two Evolve site:

Name:            ${data.name}
Email:           ${data.email}
Company:         ${data.company}
Codebase size:   ${data.codebaseSize || "Not provided"}
Tech stack:      ${data.techStack || "Not provided"}

Message:
${data.message || "(none)"}

Submitted:       ${submittedAt.toISOString()}
Source IP:        ${clientIp}`;

    const htmlBody = `<div style="font-family: sans-serif; color: #333; line-height: 1.6;">
  <h2 style="color: #9b6bf4;">New Start Now Submission</h2>
  <p>From the V.Two Evolve site:</p>
  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Name</td><td style="padding: 6px 12px;">${escapeHtml(data.name)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Email</td><td style="padding: 6px 12px;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Company</td><td style="padding: 6px 12px;">${escapeHtml(data.company)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Codebase size</td><td style="padding: 6px 12px;">${escapeHtml(data.codebaseSize || "Not provided")}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Tech stack</td><td style="padding: 6px 12px;">${escapeHtml(data.techStack || "Not provided")}</td></tr>
  </table>
  <h3 style="margin-top: 16px;">Message</h3>
  <p style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 6px;">${escapeHtml(data.message || "(none)")}</p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
  <p style="font-size: 12px; color: #999;">Submitted: ${submittedAt.toISOString()} · IP: ${clientIp}</p>
</div>`;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    // Update DB with email delivery timestamp
    if (submissionId) {
      try {
        const { eq } = await import("drizzle-orm");
        await db
          .update(startNowSubmissions)
          .set({ emailDeliveredAt: new Date() })
          .where(eq(startNowSubmissions.id, submissionId));
      } catch (updateErr) {
        logger.warn({ err: updateErr, submissionId }, "Failed to update emailDeliveredAt");
      }
    }

    logger.info({ submissionId, to: toEmail }, "Start-now email sent via Resend");

    res.status(200).json({
      message: "Thanks — Chris will reply within 1 business day.",
      id: submissionId,
    });
  } catch (err) {
    logger.error({ err }, "Failed to send start-now email via Resend");
    // Submission is already persisted — inform the user it was received
    res.status(202).json({
      message: "Thanks — your submission has been received.",
      id: submissionId,
    });
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default router;
