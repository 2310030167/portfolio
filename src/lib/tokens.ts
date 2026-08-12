import crypto from "crypto";

export interface ActionTokenPayload {
  id: string;
  name: string;
  email: string;
  subject: string;
  action: "approve" | "reject";
  exp: number; // Unix timestamp in ms
  nonce: string;
}

function getSecret(): string {
  const secret = process.env.ACTION_SECRET || process.env.SMTP_PASSWORD;
  if (!secret) {
    // Fallback secret for local development
    return "eajaz-portfolio-default-dev-secret-key-32chars";
  }
  return secret;
}

/**
 * Generates a cryptographically signed, tamper-proof token for admin actions.
 */
export function generateActionToken(
  params: Omit<ActionTokenPayload, "exp" | "nonce"> & { expiresInDays?: number }
): string {
  const secret = getSecret();
  const expiresInDays = params.expiresInDays || 7;
  const exp = Date.now() + expiresInDays * 24 * 60 * 60 * 1000;
  const nonce = crypto.randomBytes(16).toString("hex");

  const payload: ActionTokenPayload = {
    id: params.id,
    name: params.name,
    email: params.email,
    subject: params.subject,
    action: params.action,
    exp,
    nonce,
  };

  const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payloadBase64)
    .digest("base64url");

  return `${payloadBase64}.${signature}`;
}

/**
 * Verifies the HMAC-SHA256 signature and expiration of an action token.
 */
export function verifyActionToken(token: string): {
  valid: boolean;
  expired: boolean;
  payload: ActionTokenPayload | null;
  error?: string;
} {
  try {
    if (!token || typeof token !== "string") {
      return { valid: false, expired: false, payload: null, error: "Missing token" };
    }

    const parts = token.split(".");
    if (parts.length !== 2) {
      return { valid: false, expired: false, payload: null, error: "Malformed token" };
    }

    const [payloadBase64, providedSignature] = parts;
    const secret = getSecret();

    // Recompute signature
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payloadBase64)
      .digest("base64url");

    // Constant-time comparison to prevent timing attacks
    const providedBuffer = Buffer.from(providedSignature);
    const expectedBuffer = Buffer.from(expectedSignature);

    if (
      providedBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(providedBuffer, expectedBuffer)
    ) {
      return { valid: false, expired: false, payload: null, error: "Invalid signature" };
    }

    const payloadJson = Buffer.from(payloadBase64, "base64url").toString("utf-8");
    const payload: ActionTokenPayload = JSON.parse(payloadJson);

    // Check expiration
    if (Date.now() > payload.exp) {
      return { valid: false, expired: true, payload, error: "Token expired" };
    }

    return { valid: true, expired: false, payload };
  } catch {
    return { valid: false, expired: false, payload: null, error: "Token parse error" };
  }
}
