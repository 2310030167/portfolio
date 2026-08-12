/**
 * Base email layout wrapper matching the portfolio dark editorial design.
 */
export function wrapEmailLayout({
  title,
  preheader,
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
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #070708;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f4f4f6;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #070708;
      padding: 40px 16px;
    }
    .container {
      max-width: 580px;
      margin: 0 auto;
      background-color: #0e0e12;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      overflow: hidden;
    }
    .header {
      padding: 28px 32px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      background-color: #111116;
    }
    .brand {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
    }
    .eyebrow {
      font-size: 10px;
      color: #9494a0;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-top: 4px;
    }
    .body {
      padding: 32px;
    }
    .footer {
      padding: 24px 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      background-color: #09090c;
      font-size: 11px;
      color: #71717a;
      text-align: center;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  ${preheader ? `<div style="display:none;font-size:1px;color:#070708;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${preheader}</div>` : ""}
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <div class="brand">Mohammed Eajaz Ahmed</div>
        <div class="eyebrow">AI • Software • Data</div>
      </div>
      <div class="body">
        ${content}
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Mohammed Eajaz Ahmed • Personal Portfolio<br>
        This email was sent via the portfolio automated messaging engine.
      </div>
    </div>
  </div>
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
