import { z } from "zod";
import User from "../user/user.model";
import { registerSchema, TRegister, loginSchema } from "./auth.validation";

export class AuthService {
  static async register(authData: TRegister) {
    const passBody = registerSchema.safeParse(authData);

    if (!passBody.success) {
      throw passBody.error;
    }
    return;
  }
}

