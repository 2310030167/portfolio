import { wrapEmailLayout, escapeHtml } from "./layout";

interface RejectionEmailProps {
  name: string;
  subject: string;
}

export function renderRejectionEmail({ name, subject }: RejectionEmailProps): string {
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);

  const content = `
    <div style="margin-bottom: 20px;">
      <div style="font-size: 11px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px;">
        Status Update
      </div>
      <h1 style="font-size: 18px; font-weight: 700; color: #ffffff; margin: 0 0 8px 0; letter-spacing: -0.3px;">
        Regarding: ${safeSubject}
      </h1>
    </div>

    <div style="font-size: 14px; line-height: 1.7; color: #d4d4d8;">
      <p style="margin: 0 0 16px 0;">Hello ${safeName},</p>
      
      <p style="margin: 0 0 16px 0;">
        Thank you for reaching out and for your interest.
      </p>

      <p style="margin: 0 0 16px 0;">
        I have reviewed your message regarding <strong>${safeSubject}</strong>. Unfortunately, I am unable to take this request forward at the moment due to current commitments and project bandwidth.
      </p>

      <p style="margin: 0 0 20px 0;">
        I truly appreciate you taking the time to connect, and I wish you all the best.
      </p>

      <div style="margin: 28px 0 0 0; padding-top: 16px; border-top: 1px solid #23242e; color: #a1a1aa;">
        Best regards,<br>
        <strong style="color: #ffffff; font-size: 14px;">Mohammed Eajaz Ahmed</strong><br>
        <span style="font-size: 11px; color: #FFA586; letter-spacing: 1px; text-transform: uppercase; font-weight: 600;">AI • Software • Data</span>
      </div>
    </div>
  `;

  return wrapEmailLayout({
    title: `Inquiry Update — ${subject}`,
    content,
  });
}

