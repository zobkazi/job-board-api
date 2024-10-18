// src/modules/email/email.utility.ts
import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string): Promise<void> => {
  const mailOptions = {
    from: process.env.DEFAULT_SENDER_EMAIL || "admin@example.com",
    to,
    subject,
    text,
  };

  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025, // MailHog port
    secure: false,
  });

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", to);
  } catch (error) {
    console.error("Failed to send email to:", to, error);
    throw new Error("Failed to send email. Please try again.");
  }
};
