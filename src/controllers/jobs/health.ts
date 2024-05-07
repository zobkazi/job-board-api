import { Request, Response, NextFunction } from "express";

const health = (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ status: "Job Service UP" });
  } catch (error) {
    next(error);
  }
};

export default health;
