import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import {
  TokenCredentialAuthenticationProvider,
} from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { logger } from "./logger";

// ---------------------------------------------------------------------------
// Microsoft Graph mail client (client-credentials flow)
// ---------------------------------------------------------------------------

let _client: Client | undefined;

function getGraphClient(): Client {
  if (_client) return _client;

  const tenantId = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error(
      "Missing GRAPH_TENANT_ID, GRAPH_CLIENT_ID, or GRAPH_CLIENT_SECRET env vars",
    );
  }

  const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ["https://graph.microsoft.com/.default"],
  });

  _client = Client.initWithMiddleware({ authProvider });
  return _client;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export interface StartNowEmailPayload {
  name: string;
  email: string;
  company: string;
  codebaseSize?: string | null;
  techStack?: string | null;
  message?: string | null;
  submittedAt: Date;
  clientIp: string;
}

export async function sendStartNowEmail(
  payload: StartNowEmailPayload,
  options: { to: string; from: string },
): Promise<void> {
  const subject = `[Evolve Start Now] ${payload.name} from ${payload.company}`;

  const textBody = `New Start Now submission from the V.Two Evolve site:

Name:            ${payload.name}
Email:           ${payload.email}
Company:         ${payload.company}
Codebase size:   ${payload.codebaseSize || "Not provided"}
Tech stack:      ${payload.techStack || "Not provided"}

Message:
${payload.message || "(none)"}

Submitted:       ${payload.submittedAt.toISOString()}
Source IP:        ${payload.clientIp}`;

  const htmlBody = `<div style="font-family: sans-serif; color: #333; line-height: 1.6;">
  <h2 style="color: #9b6bf4;">New Start Now Submission</h2>
  <p>From the V.Two Evolve site:</p>
  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Name</td><td style="padding: 6px 12px;">${escapeHtml(payload.name)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Email</td><td style="padding: 6px 12px;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Company</td><td style="padding: 6px 12px;">${escapeHtml(payload.company)}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Codebase size</td><td style="padding: 6px 12px;">${escapeHtml(payload.codebaseSize || "Not provided")}</td></tr>
    <tr><td style="padding: 6px 12px; font-weight: bold; white-space: nowrap;">Tech stack</td><td style="padding: 6px 12px;">${escapeHtml(payload.techStack || "Not provided")}</td></tr>
  </table>
  <h3 style="margin-top: 16px;">Message</h3>
  <p style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 6px;">${escapeHtml(payload.message || "(none)")}</p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
  <p style="font-size: 12px; color: #999;">Submitted: ${payload.submittedAt.toISOString()} · IP: ${payload.clientIp}</p>
</div>`;

  const client = getGraphClient();

  const sendMailBody = {
    message: {
      subject,
      body: {
        contentType: "HTML",
        content: htmlBody,
      },
      toRecipients: [
        { emailAddress: { address: options.to } },
      ],
      replyTo: [
        { emailAddress: { address: payload.email } },
      ],
    },
    saveToSentItems: false,
  };

  // POST /users/{from}/sendMail
  await client
    .api(`/users/${options.from}/sendMail`)
    .header("Content-Type", "application/json")
    .post(sendMailBody);

  logger.info({ to: options.to, from: options.from }, "Start-now email sent via Microsoft Graph");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
