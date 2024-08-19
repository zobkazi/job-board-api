// src/modules/auth/auth.service.ts
import { z } from "zod";
import User from "../user/user.model";
import { TSignIn, TSignUp } from "./auth.validation";

export const siginUpService = async (data: TSignUp) => {
  const user = await User.create(data);
  return user;
};

export const login = async (email: string, password: string) => {};
