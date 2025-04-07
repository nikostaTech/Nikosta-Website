"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  const { name, email, phone, company, message } = formData;

  // Retrieve SMTP settings from environment variables (with defaults)
  const smtpHost = process.env.SMTP_HOST || "send.one.com";
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
  const smtpUser = process.env.SMTP_USER || "your-full-email@one.com";
  const smtpPass = process.env.SMTP_PASS || "yourpassword";

  // For port 587, secure should be false (STARTTLS), for port 465, secure is true
  const secure = smtpPort === 465;

  // Create a nodemailer transporter using the SMTP configuration
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure, // true for port 465, false for 587
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false, // adjust if stricter certificate validation is needed
    },
  });

  // Set the sender to your SMTP_USER and add a replyTo with the user's email address
  const mailOptions = {
    from: `"Website Contact" <${smtpUser}>`,
    replyTo: email,
    to: smtpUser, // receiving email address
    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Message: ${message}
    `,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error: any) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("SMTP Response:", error.response);
    }
    throw new Error("Error sending email");
  }
}
