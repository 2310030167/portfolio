import { wrapEmailLayout, escapeHtml } from "./layout";

interface RejectionEmailProps {
  name: string;
  subject: string;
}

export function renderRejectionEmail({ name, subject }: RejectionEmailProps): string {
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);

  const content = `
    <div style="margin-bottom: 24px;">
      <div style="font-size: 11px; font-weight: 600; color: #9494a0; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
        Response from Mohammed Eajaz Ahmed
      </div>
      <h1 style="font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 6px 0; letter-spacing: -0.5px;">
        Re: ${safeSubject}
      </h1>
    </div>

    <div style="font-size: 14px; line-height: 1.7; color: #d4d4d8; space-y: 16px;">
      <p style="margin: 0 0 16px 0;">Hello ${safeName},</p>
      
      <p style="margin: 0 0 16px 0;">
        Thank you for reaching out and for your interest.
      </p>

      <p style="margin: 0 0 16px 0;">
        I&apos;ve reviewed your message, but unfortunately I am unable to take this request forward at the moment due to current commitments and project bandwidth.
      </p>

      <p style="margin: 0 0 16px 0;">
        I truly appreciate you taking the time to connect, and I wish you all the best.
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
    preheader: `Thank you for reaching out, ${name}.`,
    content,
  });
}
