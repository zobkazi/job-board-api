import { Request, Response, NextFunction } from "express";
import { DivisionTypes } from "@/types/DivisionTypes";

const getDivision = (req: Request, res: Response, next: NextFunction) => {
  try {
    // req body
    const parsedBody = DivisionTypes.safeParse(req.body);

    console.log(parsedBody);
  } catch (error) {
    next(error);
  }
};

export default getDivision;
