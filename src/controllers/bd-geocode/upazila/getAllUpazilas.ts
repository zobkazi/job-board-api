import { Request, Response, NextFunction } from "express";
import Upazila from "@/models/Upazila";

const getAllUpazilas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string) || 10; // Default limit to 10 upazilas per page

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Query upazilas from database with pagination
    const upazilas = await Upazila.find().skip(skip).limit(limit);

    // Count total upazilas
    const totalUpazilas = await Upazila.countDocuments();

    // Return upazilas along with pagination information
    return res.status(200).json({
      message: "Upazilas retrieved successfully",
      data: upazilas,
      pagination: {
        total: totalUpazilas,
        page: page,
        limit: limit,
      },
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default getAllUpazilas;
