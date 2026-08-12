import { wrapEmailLayout, escapeHtml } from "./layout";

interface ApprovalEmailProps {
  name: string;
  subject: string;
}

export function renderApprovalEmail({ name, subject }: ApprovalEmailProps): string {
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);

  const content = `
    <div style="margin-bottom: 24px;">
      <div style="font-size: 11px; font-weight: 600; color: #10b981; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
        Response from Mohammed Eajaz Ahmed
      </div>
      <h1 style="font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 6px 0; letter-spacing: -0.5px;">
        Re: ${safeSubject}
      </h1>
    </div>

    <div style="font-size: 14px; line-height: 1.7; color: #d4d4d8; space-y: 16px;">
      <p style="margin: 0 0 16px 0;">Hello ${safeName},</p>
      
      <p style="margin: 0 0 16px 0;">
        Thank you for reaching out through my portfolio.
      </p>

      <p style="margin: 0 0 16px 0;">
        I&apos;ve reviewed your message and would be happy to continue the conversation. I will follow up with you with more details shortly.
      </p>

      <p style="margin: 24px 0 0 0; color: #a1a1aa;">
        Best regards,<br>
        <strong style="color: #ffffff; font-size: 15px;">Mohammed Eajaz Ahmed</strong><br>
        <span style="font-size: 12px; color: #71717a; letter-spacing: 1px; text-transform: uppercase;">AI • Software • Data</span>
      </p>
    </div>
  `;

  return wrapEmailLayout({
    title: `Re: ${subject}`,
    preheader: `Thank you for reaching out, ${name}. I will follow up shortly.`,
    content,
  });
}
