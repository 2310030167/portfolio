import { wrapEmailLayout, escapeHtml } from "./layout";

interface ApprovalEmailProps {
  name: string;
  subject: string;
}

export function renderApprovalEmail({ name, subject }: ApprovalEmailProps): string {
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);

  const content = `
    <div style="margin-bottom: 20px;">
      <div style="font-size: 11px; font-weight: 700; color: #34d399; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">
        Follow-up Confirmation
      </div>
      <h1 style="font-size: 18px; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; letter-spacing: -0.3px;">
        Regarding: ${safeSubject}
      </h1>
    </div>

    <div style="font-size: 14px; line-height: 1.7; color: #d4d4d8;">
      <p style="margin: 0 0 16px 0;">Hello ${safeName},</p>
      
      <p style="margin: 0 0 16px 0;">
        Thank you for reaching out through my portfolio.
      </p>

      <p style="margin: 0 0 16px 0;">
        I have received and reviewed your message regarding <strong>${safeSubject}</strong>. I would be glad to discuss this further with you and will follow up with additional details shortly.
      </p>

      <p style="margin: 0 0 20px 0;">
        If you have any extra context or files you would like to share in the meantime, feel free to reply directly to this email.
      </p>

      <div style="margin: 28px 0 0 0; padding-top: 16px; border-top: 1px solid #23242e; color: #a1a1aa;">
        Best regards,<br>
        <strong style="color: #ffffff; font-size: 14px;">Mohammed Eajaz Ahmed</strong><br>
        <span style="font-size: 11px; color: #FFA586; letter-spacing: 1px; text-transform: uppercase; font-weight: 600;">AI • Software • Data</span>
      </div>
    </div>
  `;

  return wrapEmailLayout({
    title: `Inquiry Confirmation — ${subject}`,
    content,
  });
}

