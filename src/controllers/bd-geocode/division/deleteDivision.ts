import { Request, Response, NextFunction } from "express";
import { DivisionTypes } from "@/types/DivisionTypes";

const deleteDivision = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(error);
  }
};

export default deleteDivision;
