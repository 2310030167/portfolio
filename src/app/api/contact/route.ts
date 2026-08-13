import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { generateActionToken } from "@/lib/tokens";
import { saveSubmission } from "@/lib/store";
import { sendAdminNotification } from "@/lib/mail";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, website } = body;

    // 1. Honeypot Anti-Spam Check: If bot filled the hidden 'website' field, silently return success
    if (website && typeof website === "string" && website.trim().length > 0) {
      console.warn("[Anti-Spam] Honeypot field triggered. Discarding submission silently.");
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (2-100 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim()) || email.trim().length > 150) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 2 || subject.trim().length > 200) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid subject (2-200 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5 || message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, message: "Please provide a message between 5 and 5000 characters." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();
    const submissionId = crypto.randomUUID();
    const now = new Date().toISOString();

    // 3. Generate Cryptographic Action Tokens
    const approveToken = generateActionToken({
      id: submissionId,
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      action: "approve",
    });

    const rejectToken = generateActionToken({
      id: submissionId,
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      action: "reject",
    });

    // 4. Determine Application Base URL
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      req.nextUrl.origin ||
      "https://portfolio-xi-silk-76.vercel.app/";

    const approveUrl = `${baseUrl}/api/contact/action?token=${approveToken}&action=approve`;
    const rejectUrl = `${baseUrl}/api/contact/action?token=${rejectToken}&action=reject`;

    // 5. Save submission state
    await saveSubmission({
      id: submissionId,
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      status: "PENDING",
      createdAt: now,
    });

    // 6. Send Admin Notification via SMTP
    const emailResult = await sendAdminNotification({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      submittedAt: new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
      approveUrl,
      rejectUrl,
    });

    if (!emailResult.success) {
      console.error("[API/Contact] Email sending failed:", emailResult.error);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. I'll review it and get back to you.",
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("[API/Contact] Unexpected error:", errorMsg);
    return NextResponse.json(
      { success: false, message: "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
