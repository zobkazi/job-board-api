import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";

exports.register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
    const user = await AuthService.register({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
