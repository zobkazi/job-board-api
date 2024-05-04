import { Request, Response, NextFunction } from "express";
import Upazila from "@/models/Upazila";

const getUpazilaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Find upazila by ID
    const upazila = await Upazila.findById(id);

    // Check if upazila exists
    if (!upazila) {
      return res.status(404).json({
        message: "Upazila not found",
      });
    }

    // Return upazila data
    return res.status(200).json({
      message: "Upazila retrieved successfully",
      data: upazila,
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default getUpazilaById;
