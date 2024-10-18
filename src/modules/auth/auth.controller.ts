// /src/modules/auth/auth.controller.ts
import { Request, Response, NextFunction } from "express";
import { siginUpService, signinService, changePasswordService, forgotPasswordService,validateResetCodeService } from "./auth.service";
import { siginUpSchema, sigiInSchema } from "./auth.validation";


// signup.controller
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

    if (!token) {
      throw new Error("Invalid email or password");
    }

    // Set the token in the Header
    res.setHeader("Authorization", `Bearer ${token}`);

    // Set the token in the Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      sameSite: "none",
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};



// Forgot Password Controller
export const forgotPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  try {
    const message = await forgotPasswordService(email);
    res.status(200).json({ success: true, message });
  } catch (err) {
    next(err);
  }
};

// Validate Code Controller
export const validateResetCodeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, code } = req.body;
  try {
    await validateResetCodeService(email, code);
    res.status(200).json({ success: true, message: "Code is valid." });
  } catch (err) {
    next(err);
  }
};

// Change Password Controller
export const changePasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, newPassword } = req.body;
  try {
    const message = await changePasswordService(email, newPassword);
    res.status(200).json({ success: true, message });
  } catch (err) {
    next(err);
  }
};