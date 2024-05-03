import { Request, Response, NextFunction } from "express";
import { DivisionTypes } from "@/types/DivisionTypes";

const getDivision = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

export default getDivision;
