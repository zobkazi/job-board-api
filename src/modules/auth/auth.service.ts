// src/modules/auth/auth.service.ts
import { z } from "zod";
import User from "../user/user.model";
import { TRegister, loginSchema } from "./auth.validation";

export const registerService = async (data: TRegister) => {
  const user = await User.create(data);
  return user;
};

export const login = async (email: string, password: string) => {};
