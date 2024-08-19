import { Request, Response, NextFunction } from "express";
import { registerService, login } from "./auth.service";
import { registerSchema, loginSchema } from "./auth.validation";

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const passBody = registerSchema.safeParse(req.body);

  if (!passBody.success) {
    return next(passBody.error);
  }

  const user = await registerService(passBody.data);
  res.status(201).json({ user });

  console.log("user created", user);

  try {
  } catch (error) {
    next(error);
  }
};
