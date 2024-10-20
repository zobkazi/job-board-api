"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
// src/modules/email/email.utility.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.DEFAULT_SENDER_EMAIL || "admin@example.com",
        to,
        subject,
        text,
    };
    const transporter = nodemailer_1.default.createTransport({
        host: "localhost",
        port: 1025, // MailHog port
        secure: false,
    });
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", to);
    }
    catch (error) {
        console.error("Failed to send email to:", to, error);
        throw new Error("Failed to send email. Please try again.");
    }
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.utility.js.map