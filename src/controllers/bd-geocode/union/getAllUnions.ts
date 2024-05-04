import { Request, Response, NextFunction } from "express";
import Union from "@/models/Unions";

const getAllUnions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string) || 10; // Default limit to 10 unions per page

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Query unions from database with pagination
    const unions = await Union.find().skip(skip).limit(limit);

    // Count total unions
    const totalUnions = await Union.countDocuments();

    // Return unions along with pagination information
    return res.status(200).json({
      message: "Unions retrieved successfully",
      data: unions,
      pagination: {
        total: totalUnions,
        page: page,
        limit: limit,
      },
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default getAllUnions;
