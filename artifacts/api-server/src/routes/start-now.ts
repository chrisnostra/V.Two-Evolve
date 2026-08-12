import { Router, type IRouter, type Request, type Response } from "express";
import { z } from "zod";
import { db } from "@workspace/db";
import { startNowSubmissions } from "@workspace/db/schema";
import { logger } from "../lib/logger";
import { sendStartNowEmail } from "../lib/graph-mailer";

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

  // Send email via Microsoft Graph
  const toEmail = process.env.START_NOW_TO_EMAIL ?? "chris@vtwo.co";
  const fromEmail = process.env.START_NOW_FROM_EMAIL ?? "noreply@vtwo.co";

  const graphConfigured =
    process.env.GRAPH_TENANT_ID &&
    process.env.GRAPH_CLIENT_ID &&
    process.env.GRAPH_CLIENT_SECRET;

  if (!graphConfigured) {
    logger.error(
      "GRAPH_TENANT_ID / GRAPH_CLIENT_ID / GRAPH_CLIENT_SECRET not fully set — email will NOT be sent. Submission saved to DB.",
    );
    res.status(202).json({
      message: "Thanks — your submission has been received.",
      id: submissionId,
    });
    return;
  }

  try {
    await sendStartNowEmail(
      {
        name: data.name,
        email: data.email,
        company: data.company,
        codebaseSize: data.codebaseSize,
        techStack: data.techStack,
        message: data.message,
        submittedAt,
        clientIp,
      },
      { to: toEmail, from: fromEmail },
    );

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

    res.status(200).json({
      message: "Thanks — Chris will reply within 1 business day.",
      id: submissionId,
    });
  } catch (err) {
    logger.error({ err }, "Failed to send start-now email via Microsoft Graph");
    // Submission is already persisted — inform the user it was received
    res.status(202).json({
      message: "Thanks — your submission has been received.",
      id: submissionId,
    });
  }
});

export default router;
