import { wrapEmailLayout, escapeHtml } from "./layout";

interface AdminNotificationProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
  approveUrl: string;
  rejectUrl: string;
}

export function renderAdminNotificationEmail({
  name,
  email,
  subject,
  message,
  submittedAt,
  approveUrl,
  rejectUrl,
}: AdminNotificationProps): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const safeDate = escapeHtml(submittedAt);

  const content = `
    <div style="margin-bottom: 24px;">
      <span style="display: inline-block; padding: 4px 10px; border-radius: 9999px; background-color: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); font-size: 11px; font-weight: 600; color: #818cf8; text-transform: uppercase; letter-spacing: 1px;">
        New Contact Inquiry
      </span>
      <h1 style="font-size: 22px; font-weight: 700; color: #ffffff; margin: 12px 0 6px 0; letter-spacing: -0.5px;">
        ${safeSubject}
      </h1>
      <div style="font-size: 12px; color: #71717a;">
        Submitted on ${safeDate}
      </div>
    </div>

    <!-- Sender Details Card -->
    <div style="background-color: #14141a; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; padding: 18px 20px; margin-bottom: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="color: #71717a; padding: 4px 0; width: 80px;">From:</td>
          <td style="color: #ffffff; font-weight: 600; padding: 4px 0;">${safeName}</td>
        </tr>
        <tr>
          <td style="color: #71717a; padding: 4px 0;">Email:</td>
          <td style="padding: 4px 0;">
            <a href="mailto:${safeEmail}" style="color: #818cf8; text-decoration: none;">${safeEmail}</a>
          </td>
        </tr>
      </table>
    </div>

    <!-- Message Body -->
    <div style="margin-bottom: 32px;">
      <div style="font-size: 11px; font-weight: 600; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
        Message Content
      </div>
      <div style="background-color: #050507; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; padding: 20px; font-size: 14px; line-height: 1.65; color: #d4d4d8;">
        ${safeMessage}
      </div>
    </div>

    <!-- Action Buttons -->
    <div style="background-color: #111116; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; text-align: center;">
      <div style="font-size: 11px; font-weight: 700; color: #9494a0; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;">
        Action Required • Select Workflow
      </div>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 0 8px 0 0; width: 50%;">
            <a href="${approveUrl}" style="display: block; padding: 13px 18px; background-color: #10b981; color: #000000; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 10px; text-align: center;">
              ✓ APPROVE MESSAGE
            </a>
          </td>
          <td style="padding: 0 0 0 8px; width: 50%;">
            <a href="${rejectUrl}" style="display: block; padding: 13px 18px; background-color: rgba(244, 63, 94, 0.15); border: 1px solid rgba(244, 63, 94, 0.3); color: #fb7185; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 10px; text-align: center;">
              ✕ REJECT MESSAGE
            </a>
          </td>
        </tr>
      </table>

      <div style="font-size: 11px; color: #52525b; margin-top: 14px; line-height: 1.4;">
        Clicking either action will automatically send the corresponding notification to the sender. Links expire in 7 days.
      </div>
    </div>
  `;

  return wrapEmailLayout({
    title: `New Portfolio Contact — ${name}`,
    preheader: `New message from ${name}: ${subject}`,
    content,
  });
}
