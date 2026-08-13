import nodemailer from "nodemailer";
import { renderAdminNotificationEmail } from "./email/admin-notification";
import { renderApprovalEmail } from "./email/approval-email";
import { renderRejectionEmail } from "./email/rejection-email";

function getTransporter(): nodemailer.Transporter {
  const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = (process.env.SMTP_USER || "").trim();
  // Strip spaces if user copied a 16-character Google App Password with spaces
  const pass = (process.env.SMTP_PASSWORD || "").replace(/\s+/g, "").trim();

  // If using Gmail, nodemailer's built-in service configuration handles standard port/auth/TLS
  if (host === "smtp.gmail.com" || user.endsWith("@gmail.com")) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: user && pass ? { user, pass } : undefined,
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export function getFromAddress(): string {
  const user = (process.env.SMTP_USER || "eajazahmedm@gmail.com").trim();
  const from = process.env.SMTP_FROM?.trim();

  // If a custom from is explicitly configured
  if (from && from.length > 0) {
    return from;
  }

  // Personal Gmail authentication requires matching sender to prevent spam quarantine
  return `"Mohammed Eajaz Ahmed" <${user}>`;
}

export function getAdminEmail(): string {
  return (process.env.ADMIN_EMAIL || process.env.SMTP_USER || "eajazahmedm@gmail.com").trim();
}

/**
 * Sends a new inquiry notification email to the admin with Approve / Reject action links.
 */
export async function sendAdminNotification(params: {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
  approveUrl: string;
  rejectUrl: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transport = getTransporter();
    const html = renderAdminNotificationEmail(params);
    const from = getFromAddress();
    const to = getAdminEmail();

    // Plain text alternative prevents spam score penalty
    const text = `NEW PORTFOLIO MESSAGE

From: ${params.name}
Email: ${params.email}
Subject: ${params.subject}
Submitted: ${params.submittedAt}

Message:
${params.message}

---
ACTION REQUIRED:
Approve: ${params.approveUrl}
Reject: ${params.rejectUrl}
`;

    console.log(`[SMTP] Sending admin notification from: ${from} -> to: ${to}`);

    const info = await transport.sendMail({
      from,
      to,
      replyTo: `"${params.name}" <${params.email}>`,
      subject: `New Portfolio Contact: ${params.subject}`,
      text,
      html,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "high",
      },
    });

    console.log("[SMTP] Admin notification sent successfully. MessageId:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    console.error("[SMTP] Failed to send admin notification:", message);
    return { success: false, error: message };
  }
}

/**
 * Sends an automated approval response email to the visitor.
 */
export async function sendVisitorApproval(params: {
  name: string;
  email: string;
  subject: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transport = getTransporter();
    const html = renderApprovalEmail(params);
    const from = getFromAddress();
    const adminEmail = getAdminEmail();

    const text = `Hello ${params.name},

Thank you for reaching out through my portfolio.

I have received and reviewed your message regarding "${params.subject}". I would be glad to discuss this further with you and will follow up with additional details shortly.

If you have any extra context or files you would like to share in the meantime, feel free to reply directly to this email.

Best regards,
Mohammed Eajaz Ahmed
AI • Software • Data
Portfolio: https://portfolio-xi-silk-76.vercel.app/
Company: https://devilslab.co.in/
`;

    console.log(`[SMTP] Sending visitor approval from: ${from} -> to: ${params.email}`);

    const info = await transport.sendMail({
      from,
      to: params.email,
      replyTo: `"Mohammed Eajaz Ahmed" <${adminEmail}>`,
      subject: `Mohammed Eajaz Ahmed — Regarding: ${params.subject}`,
      text,
      html,
      headers: {
        "X-Entity-Ref-ID": `approval-${Date.now()}`,
      },
    });

    console.log("[SMTP] Visitor approval email sent successfully. MessageId:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    console.error("[SMTP] Failed to send visitor approval email:", message);
    return { success: false, error: message };
  }
}

/**
 * Sends an automated polite rejection response email to the visitor.
 */
export async function sendVisitorRejection(params: {
  name: string;
  email: string;
  subject: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transport = getTransporter();
    const html = renderRejectionEmail(params);
    const from = getFromAddress();
    const adminEmail = getAdminEmail();

    const text = `Hello ${params.name},

Thank you for reaching out and for your interest.

I have reviewed your message regarding "${params.subject}". Unfortunately, I am unable to take this request forward at the moment due to current commitments and project bandwidth.

I truly appreciate you taking the time to connect, and I wish you all the best.

Best regards,
Mohammed Eajaz Ahmed
AI • Software • Data
Portfolio: https://portfolio-xi-silk-76.vercel.app/
Company: https://devilslab.co.in/
`;

    console.log(`[SMTP] Sending visitor rejection from: ${from} -> to: ${params.email}`);

    const info = await transport.sendMail({
      from,
      to: params.email,
      replyTo: `"Mohammed Eajaz Ahmed" <${adminEmail}>`,
      subject: `Mohammed Eajaz Ahmed — Regarding: ${params.subject}`,
      text,
      html,
      headers: {
        "X-Entity-Ref-ID": `rejection-${Date.now()}`,
      },
    });

    console.log("[SMTP] Visitor rejection email sent successfully. MessageId:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    console.error("[SMTP] Failed to send visitor rejection email:", message);
    return { success: false, error: message };
  }
}

