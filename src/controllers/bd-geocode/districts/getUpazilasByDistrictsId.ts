import { Request, Response, NextFunction } from "express";
import District from "@/models/District";

const getUpazilasByDistrictsId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    // Pass the error to the error handler middleware
    next(err);
  }
};

export default getUpazilasByDistrictsId;
