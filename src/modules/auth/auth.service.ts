// src/modules/auth/auth.service.ts

import User from "../user/user.model";
import { TSignIn, TSignUp } from "./auth.validation";
import bcrypt from "bcryptjs";
import { Document } from "mongoose";
import jwt from "jsonwebtoken";

export const siginUpService = async (data: TSignUp): Promise<Document> => {
  const existingEmail = await User.findOne({ email: data.email });
  if (existingEmail) {
    throw new Error("Email already taken");
  }
  const user = await User.create(data);
  return user;
};

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
