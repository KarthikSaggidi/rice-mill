import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = Record<string, unknown>;

function textField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
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

function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
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

  if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
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
  const smtpUser = process.env.SMTP_USER?.trim();
  const contactEmail = process.env.CONTACT_EMAIL?.trim();
  const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT?.trim() || 587);
  const smtpSecureValue = process.env.SMTP_SECURE?.trim().toLowerCase();
  const smtpSecure = smtpSecureValue
    ? smtpSecureValue === "true"
    : smtpPort === 465;

  const missingConfiguration = [
    ["GOOGLE_CLIENT_ID", googleClientId],
    ["GOOGLE_CLIENT_SECRET", googleClientSecret],
    ["GOOGLE_REFRESH_TOKEN", googleRefreshToken],
    ["SMTP_USER", smtpUser],
    ["CONTACT_EMAIL", contactEmail],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingConfiguration.length || !Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65_535) {
    console.error("Contact email configuration is incomplete.", {
      missingConfiguration,
      invalidSmtpPort: !Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65_535,
    });

    return errorResponse(
      "Our email service is temporarily unavailable. Please call us or try again later.",
      503
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    auth: {
      type: "OAuth2",
      user: smtpUser,
      clientId: googleClientId,
      clientSecret: googleClientSecret,
      refreshToken: googleRefreshToken,
    },
  });

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

  const htmlValue = (value: string) => escapeHtml(value || "Not provided");
  const htmlMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  try {
    await transporter.sendMail({
      from: `"Rice Mill Website" <${smtpUser}>`,
      to: contactEmail,
      ...(email ? { replyTo: email } : {}),
      subject: "New Business Enquiry — Mahadal Rice Mill",
      text: plainText,
      html: `
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
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    const smtpError = error as NodeJS.ErrnoException & { responseCode?: number };
    console.error("Contact email delivery failed.", {
      code: smtpError.code,
      responseCode: smtpError.responseCode,
    });

    return errorResponse(
      "We couldn't send your enquiry right now. Please try again or call us directly.",
      502
    );
  } finally {
    transporter.close();
  }
}
