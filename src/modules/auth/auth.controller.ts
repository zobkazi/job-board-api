import { Request, Response, NextFunction } from "express";
import { siginUpService } from "./auth.service";
import { siginUpSchema } from "./auth.validation";

export const siginUpController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const passBody = siginUpSchema.safeParse(req.body);

  if (!passBody.success) {
    return next(passBody.error);
  }

  const user = await siginUpService(passBody.data);
  res.status(201).json({ user });

  console.log("user created", user);

  try {
  } catch (error) {
    next(error);
  }
};
