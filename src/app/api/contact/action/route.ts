import { NextRequest, NextResponse } from "next/server";
import { verifyActionToken } from "@/lib/tokens";
import { markSubmissionProcessed } from "@/lib/store";
import { sendVisitorApproval, sendVisitorRejection } from "@/lib/mail";

function renderConfirmationPage({
  title,
  subtitle,
  badgeText,
  badgeType,
  details,
}: {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeType: "success" | "neutral" | "warning" | "error";
  details?: { name: string; email: string; subject: string; action: string };
}) {
  const badgeColors = {
    success: "background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #34d399;",
    neutral: "background: rgba(161, 161, 170, 0.15); border: 1px solid rgba(161, 161, 170, 0.3); color: #e4e4e7;",
    warning: "background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); color: #fbbf24;",
    error: "background: rgba(244, 63, 94, 0.15); border: 1px solid rgba(244, 63, 94, 0.3); color: #fb7185;",
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Mohammed Eajaz Ahmed</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background-color: #070708;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #f4f4f6;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      box-sizing: border-box;
    }
    .card {
      max-width: 520px;
      width: 100%;
      background-color: #0c0c11;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      padding: 40px 36px;
      text-align: center;
      box-shadow: 0 20px 60px -10px rgba(0, 0, 0, 0.8);
    }
    .badge {
      display: inline-block;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
      ${badgeColors[badgeType]}
    }
    h1 {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -1px;
      margin: 0 0 12px 0;
      color: #ffffff;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      color: #a1a1aa;
      margin: 0 0 28px 0;
    }
    .details {
      background-color: #121218;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 16px;
      padding: 18px 20px;
      text-align: left;
      font-size: 13px;
      margin-bottom: 28px;
    }
    .details-row {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }
    .details-row:last-child {
      border-bottom: none;
    }
    .label {
      color: #71717a;
    }
    .val {
      color: #f4f4f6;
      font-weight: 600;
    }
    .btn {
      display: inline-block;
      padding: 12px 28px;
      background-color: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn:hover {
      background-color: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.25);
    }
    .footer-brand {
      margin-top: 32px;
      font-size: 11px;
      color: #52525b;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">${badgeText}</div>
    <h1>${title}</h1>
    <p>${subtitle}</p>

    ${
      details
        ? `<div class="details">
            <div class="details-row">
              <span class="label">Visitor:</span>
              <span class="val">${details.name}</span>
            </div>
            <div class="details-row">
              <span class="label">Email:</span>
              <span class="val">${details.email}</span>
            </div>
            <div class="details-row">
              <span class="label">Subject:</span>
              <span class="val">${details.subject}</span>
            </div>
            <div class="details-row">
              <span class="label">Decision:</span>
              <span class="val" style="color: ${details.action === "approve" ? "#34d399" : "#fb7185"};">${details.action.toUpperCase()}</span>
            </div>
          </div>`
        : ""
    }

    <a href="/" class="btn">← Return to Portfolio</a>
    
    <div class="footer-brand">
      Mohammed Eajaz Ahmed • AI • Software • Data
    </div>
  </div>
</body>
</html>`;
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const token = searchParams.get("token");
    const requestedAction = searchParams.get("action");

    if (!token || !requestedAction || !["approve", "reject"].includes(requestedAction)) {
      return new NextResponse(
        renderConfirmationPage({
          title: "Invalid Action Link",
          subtitle: "The link provided is malformed or missing required authorization parameters.",
          badgeText: "Bad Request",
          badgeType: "error",
        }),
        { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    // 1. Verify token signature and expiration
    const verification = verifyActionToken(token);

    if (!verification.valid || !verification.payload) {
      if (verification.expired) {
        return new NextResponse(
          renderConfirmationPage({
            title: "Link Expired",
            subtitle: "This authorization action link has expired (links are valid for 7 days).",
            badgeText: "Expired",
            badgeType: "warning",
          }),
          { status: 410, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      return new NextResponse(
        renderConfirmationPage({
          title: "Invalid Authorization",
          subtitle: "This action link could not be verified or has been tampered with.",
          badgeText: "Unauthorized",
          badgeType: "error",
        }),
        { status: 403, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    const { id, name, email, subject, action, nonce } = verification.payload;

    // Verify requested action matches token intent
    if (requestedAction !== action) {
      return new NextResponse(
        renderConfirmationPage({
          title: "Action Mismatch",
          subtitle: "The requested action does not match the signed token payload.",
          badgeText: "Mismatch",
          badgeType: "error",
        }),
        { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    const targetStatus = action === "approve" ? "APPROVED" : "REJECTED";

    // 2. Mark submission processed & prevent double execution (Idempotency)
    const result = await markSubmissionProcessed(id, nonce, targetStatus, {
      name,
      email,
      subject,
    });

    if (result.alreadyProcessed) {
      return new NextResponse(
        renderConfirmationPage({
          title: "Already Processed",
          subtitle: `This message has already been handled and recorded as ${result.status}. No duplicate notification was sent.`,
          badgeText: "Completed",
          badgeType: "neutral",
          details: { name, email, subject, action },
        }),
        { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    // 3. Dispatch automated visitor response via SMTP
    if (action === "approve") {
      await sendVisitorApproval({ name, email, subject });
    } else {
      await sendVisitorRejection({ name, email, subject });
    }

    // 4. Render clean branded confirmation page
    const pageTitle = action === "approve" ? "Message Approved" : "Message Rejected";
    const pageSubtitle =
      action === "approve"
        ? "The sender has been notified with your follow-up confirmation."
        : "The sender has been notified with a polite response.";

    return new NextResponse(
      renderConfirmationPage({
        title: pageTitle,
        subtitle: pageSubtitle,
        badgeText: action === "approve" ? "Approved & Sent" : "Rejected & Sent",
        badgeType: action === "approve" ? "success" : "neutral",
        details: { name, email, subject, action },
      }),
      { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("[API/Action] Unexpected error:", errorMsg);
    return new NextResponse(
      renderConfirmationPage({
        title: "Server Error",
        subtitle: "An unexpected error occurred while processing this action.",
        badgeText: "System Error",
        badgeType: "error",
      }),
      { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
}
