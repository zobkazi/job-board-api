import { Request, Response, NextFunction } from "express";
import Division from "@/models/Divisions";

const getDivisionById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Find division by ID
    const division = await Division.findById(id);

    // Check if division exists
    if (!division) {
      return res.status(404).json({
        message: "Division not found",
      });
    }

    // Return division
    return res.status(200).json({
      message: "Division retrieved successfully",
      data: division,
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default getDivisionById;
