import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      enquiry,
      message,
    } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASSWORD,
      CONTACT_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASSWORD ||
      !CONTACT_EMAIL
    ) {
      console.error("Missing SMTP environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Rice Mill Website" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      text: `
New enquiry received from the website.

Name: ${name}
Phone: ${phone}
Email: ${email}
Enquiry Type: ${enquiry || "General Enquiry"}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Enquiry Type:</strong> ${
            enquiry || "General Enquiry"
          }</p>

          <hr />

          <p><strong>Message:</strong></p>

          <p style="white-space: pre-line;">
            ${message}
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to send enquiry.",
      },
      { status: 500 }
    );
  }
}