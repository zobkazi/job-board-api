// /src/modules/auth/auth.controller.ts
import { Request, Response, NextFunction } from "express";
import { siginUpService, signinService } from "./auth.service";
import { siginUpSchema, sigiInSchema } from "./auth.validation";

export const siginUpController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // validate body with zod
  const parsedBody = siginUpSchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({
      success: false,
      error: parsedBody.error,
    });
  }

  try {
    const user = await siginUpService(parsedBody.data);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

// /src/modules/auth/auth.controller.ts
export const signinController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // validation of request body
  const parsedBody = sigiInSchema.safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(400).json({
      success: false,
      error: parsedBody.error,
    });
  }

  try {
    const token = await signinService(parsedBody.data);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};
