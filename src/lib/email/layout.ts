/**
 * Base email layout wrapper optimized for high inbox deliverability.
 */
export function wrapEmailLayout({
  title,
  content,
}: {
  title: string;
  preheader?: string;
  content: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0c10; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f4f4f6; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b0c10; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: #12131a; border: 1px solid #272732; border-radius: 16px; overflow: hidden; text-align: left;">
          <!-- Header -->
          <tr>
            <td style="padding: 24px 28px; border-bottom: 1px solid #23242e; background-color: #161722;">
              <div style="font-size: 14px; font-weight: 700; letter-spacing: 1.5px; color: #ffffff; text-transform: uppercase;">
                Mohammed Eajaz Ahmed
              </div>
              <div style="font-size: 11px; color: #FFA586; letter-spacing: 1px; text-transform: uppercase; margin-top: 4px; font-weight: 600;">
                AI • Software • Data
              </div>
            </td>
          </tr>
          
          <!-- Body Content -->
          <tr>
            <td style="padding: 28px;">
              ${content}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 28px; border-top: 1px solid #23242e; background-color: #0e0f15; font-size: 11px; color: #828290; text-align: center; line-height: 1.6;">
              <div>© ${new Date().getFullYear()} Mohammed Eajaz Ahmed • AI &amp; Software Engineer</div>
              <div style="margin-top: 6px;">
                <a href="https://portfolio-xi-silk-76.vercel.app/" style="color: #FFA586; text-decoration: none;">Portfolio</a>
                &nbsp;•&nbsp;
                <a href="https://devilslab.co.in/" style="color: #FFA586; text-decoration: none;">DevilsLab</a>
                &nbsp;•&nbsp;
                <a href="mailto:eajazahmedm@gmail.com" style="color: #FFA586; text-decoration: none;">eajazahmedm@gmail.com</a>
              </div>
              <div style="margin-top: 8px; font-size: 10px; color: #5a5a66;">
                You received this message in response to an inquiry submitted through the portfolio contact form.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Escapes HTML characters to prevent XSS / HTML injection in email clients.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

