import { Request, Response, NextFunction } from "express";

const health = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ status: "Division Service UP" });
  } catch (error) {
    next(error);
  }
};

export default health;
