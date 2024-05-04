import { Request, Response, NextFunction } from "express";
import Union from "@/models/Unions";

const getUnionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Find union by ID
    const union = await Union.findById(id);

    // Check if union exists
    if (!union) {
      return res.status(404).json({
        message: "Union not found",
      });
    }

    // Return union data
    return res.status(200).json({
      message: "Union retrieved successfully",
      data: union,
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default getUnionById;
