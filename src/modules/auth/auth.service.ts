// src/modules/auth/auth.service.ts
import User from "../user/user.model";
import { TSignIn, TSignUp } from "./auth.validation";
import bcrypt from "bcryptjs";
import { Document } from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import {sendEmail} from '../email/email.utility'




// signup.service
export const siginUpService = async (data: TSignUp): Promise<Document> => {
 // Check if email already exists
  const existingEmail = await User.findOne({ email: data.email });
  if (existingEmail) {
    throw new Error("Email already taken");
  }


  // Hash the password before saving the user
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword; 

  const user = await User.create(data);
  // Send sign-up success email
  try {
   await sendEmail(user.email, "Sign-up Notification", "You have successfully signed up!");
  } catch (error) {
    console.error("Failed to send sign-up email:", error);
  }
  // Return the created user
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


  // Send sign-in success email
  try {
    await sendEmail(user.email, "Sign-in Notification", "You have successfully signed in!");

    

  } catch (error) {
    console.error("Failed to send sign-in email:", error);
  }

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

   // Set expiry time for 2 minutes from now
   const expiryTime = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes from now

    // Store the code in the user model (you may need to add this field in your User schema)
    user.resetCode = code;
    user.resetCodeExpiry = expiryTime;
    await user.save();

    // Send password reset email
    try {
    await sendEmail(user.email, "Password Reset", `Your password reset code is: ${code}, it will expire in 2 minutes.`);
    return "Code sent to your email";
  } catch (error) {
    console.error("Failed to send password reset email:", error);
  }

  return "Reset code sent to your email.";
}


// Validate Code Service
export const validateResetCodeService = async (email: string, code: string): Promise<boolean> => {
  const user = await User.findOne({ email });
  if (!user || user.resetCode !== code) {
    throw new Error("Invalid code or user not found");
  }
   // Check if the reset code is expired
   if (user.resetCodeExpiry && user.resetCodeExpiry < new Date()) {
    throw new Error("Reset code has expired");
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

  console.log("new password", user.password);

  // Send password change success email
  try {
    await sendEmail(user.email, "Password Changed", "Your password has been changed successfully.");
  } catch (error) {
    console.error("Failed to send password change email:", error);
  }

  return "Password changed successfully.";
};