// src/modules/auth/auth.service.ts
import User from "../user/user.model";
import { TSignIn, TSignUp } from "./auth.validation";
import bcrypt from "bcryptjs";
import { Document } from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";


export const siginUpService = async (data: TSignUp): Promise<Document> => {
  const existingEmail = await User.findOne({ email: data.email });
  if (existingEmail) {
    throw new Error("Email already taken");
  }
  const user = await User.create(data);
  return user;
};


// auth.service.ts
export const signinService = async (data: TSignIn): Promise<string> => {
  // Check if user exists
  const user = await User.findOne({ email: data.email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Define the JWT secret and expiration time
  const secret = process.env.JWT_SECRET || "kazi";
  const expiresIn = "1d";

  // Generate the JWT token
  const payload = {
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, secret, { expiresIn });

  // Return the user and the token
  return token;
};



// Forgot Password
export const forgotPasswordService = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }


  // Generate a 6 digit code
  const code = crypto.randomInt(100000, 999999).toString();

    // Store the code in the user model (you may need to add this field in your User schema)
    user.resetCode = code;
    await user.save();

    // Send email with the code
  const mailOptions = {
    from: process.env.DEFAULT_SENDER_EMAIL || "admin@example.com",
    to: user.email,
    subject: "Password Reset Code",
    text: `Your password reset code is ${code}`,
  };

  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025, // MailHog port
    secure: false,
  });

  await transporter.sendMail(mailOptions);
  return "Reset code sent to your email.";
}


// Validate Code Service
export const validateResetCodeService = async (email: string, code: string): Promise<boolean> => {
  const user = await User.findOne({ email });
  if (!user || user.resetCode !== code) {
    throw new Error("Invalid code or user not found");
  }
  return true;
};

// Change Password Service
export const changePasswordService = async (email: string, newPassword: string): Promise<string> => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  // Hash the new password
  user.password = await bcrypt.hash(newPassword, 10);
  user.resetCode = undefined; // Clear the reset code after password change
  await user.save();

  // Send confirmation email
  const mailOptions = {
    from: process.env.DEFAULT_SENDER_EMAIL || "admin@example.com",
    to: user.email,
    subject: "Password Changed Successfully",
    text: "Your password has been changed successfully. If you did not make this change, please contact support immediately.",
  };

  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025, // MailHog port
    secure: false,
  });

  await transporter.sendMail(mailOptions);
  
  return "Password changed successfully and confirmation email sent.";
};