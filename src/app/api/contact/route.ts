import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = Record<string, unknown>;

function textField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function base64MimeBody(value: string): string {
  const encoded = Buffer.from(value, "utf8").toString("base64");
  return encoded.match(/.{1,76}/g)?.join("\r\n") ?? "";
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

async function getGoogleAccessToken(clientId: string, clientSecret: string, refreshToken: string) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    signal: AbortSignal.timeout(15_000),
  });

  const result = (await response.json().catch(() => null)) as
    | { access_token?: string; error?: string }
    | null;

  if (!response.ok || !result?.access_token) {
    throw new Error(`google_token_${response.status}_${result?.error || "invalid_response"}`);
  }

  return result.access_token;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return errorResponse("Your enquiry is too long. Please shorten it and try again.", 413);
  }

  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return errorResponse("Please submit the form again with valid details.", 400);
  }

  const payload = body as ContactPayload;
  const name = textField(payload.name);
  const phone = textField(payload.phone);
  const email = textField(payload.email);
  const company = textField(payload.company);
  const enquiry = textField(payload.enquiry) || "General Enquiry";
  const product = textField(payload.product) || "Not specified";
  const quantity = textField(payload.quantity);
  const location = textField(payload.location);
  const message = textField(payload.message);

  if (name.length < 2 || name.length > 120) {
    return errorResponse("Enter a name between 2 and 120 characters.", 400);
  }

  if (phone.length < 5 || phone.length > 40) {
    return errorResponse("Enter a valid phone number.", 400);
  }

  if (email && !isEmail(email)) {
    return errorResponse("Enter a valid email address or leave that field blank.", 400);
  }

  if (message.length < 10 || message.length > 6_000) {
    return errorResponse("Tell us a little more about your requirement (10–6000 characters).", 400);
  }

  if (
    company.length > 200 ||
    enquiry.length > 120 ||
    product.length > 120 ||
    quantity.length > 120 ||
    location.length > 200
  ) {
    return errorResponse("One or more form fields are too long.", 400);
  }

  const googleClientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();
  const senderEmail = process.env.SMTP_USER?.trim();
  const contactEmail = process.env.CONTACT_EMAIL?.trim();

  const missingConfiguration = [
    ["GOOGLE_CLIENT_ID", googleClientId],
    ["GOOGLE_CLIENT_SECRET", googleClientSecret],
    ["GOOGLE_REFRESH_TOKEN", googleRefreshToken],
    ["SMTP_USER", senderEmail],
    ["CONTACT_EMAIL", contactEmail],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (
    missingConfiguration.length ||
    !googleClientId ||
    !googleClientSecret ||
    !googleRefreshToken ||
    !senderEmail ||
    !contactEmail ||
    !isEmail(senderEmail) ||
    !isEmail(contactEmail)
  ) {
    console.error("Contact email configuration is incomplete.", { missingConfiguration });
    return errorResponse(
      "Our email service is temporarily unavailable. Please call us or try again later.",
      503
    );
  }

  const plainText = [
    "New business enquiry received from the website.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "Not provided"}`,
    `Company: ${company || "Not provided"}`,
    `Enquiry type: ${enquiry}`,
    `Product: ${product}`,
    `Approximate quantity: ${quantity || "Not provided"}`,
    `Location: ${location || "Not provided"}`,
    "",
    "Requirement details:",
    message,
  ].join("\n");

  const htmlMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
  const htmlValue = (value: string) => escapeHtml(value || "Not provided");
  const boundary = `mahadal-${randomUUID()}`;
  const subject = `=?UTF-8?B?${Buffer.from("New Business Enquiry — Mahadal Rice Mill", "utf8").toString("base64")}?=`;

  const mimeMessage = [
    `From: "Rice Mill Website" <${senderEmail}>`,
    `To: ${contactEmail}`,
    ...(email ? [`Reply-To: ${email}`] : []),
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    base64MimeBody(plainText),
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    base64MimeBody(`
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18201b;">
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${htmlValue(name)}</p>
        <p><strong>Phone:</strong> ${htmlValue(phone)}</p>
        <p><strong>Email:</strong> ${htmlValue(email)}</p>
        <p><strong>Company:</strong> ${htmlValue(company)}</p>
        <p><strong>Enquiry type:</strong> ${htmlValue(enquiry)}</p>
        <p><strong>Product:</strong> ${htmlValue(product)}</p>
        <p><strong>Approximate quantity:</strong> ${htmlValue(quantity)}</p>
        <p><strong>Location:</strong> ${htmlValue(location)}</p>
        <hr />
        <p><strong>Requirement details:</strong></p>
        <p>${htmlMessage}</p>
      </div>
    `.trim()),
    `--${boundary}--`,
    "",
  ].join("\r\n");

  try {
    const accessToken = await getGoogleAccessToken(
      googleClientId,
      googleClientSecret,
      googleRefreshToken
    );
    const raw = Buffer.from(mimeMessage, "utf8").toString("base64url");
    const response = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      const result = (await response.json().catch(() => null)) as
        | { error?: { status?: string } }
        | null;
      throw new Error(`gmail_send_${response.status}_${result?.error?.status || "failed"}`);
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact email delivery failed.", {
      reason: error instanceof Error ? error.message : "unknown_error",
    });

    return errorResponse(
      "We couldn't send your enquiry right now. Please try again or call us directly.",
      502
    );
  }
}
