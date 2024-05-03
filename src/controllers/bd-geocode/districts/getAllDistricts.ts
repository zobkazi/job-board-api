import { Request, Response, NextFunction } from "express";
import District from "@/models/District";

const getAllDistricts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string) || 10; // Default limit to 10 districts per page

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Query districts from database with pagination
    const districts = await District.find().skip(skip).limit(limit);

    // Count total districts
    const totalDistricts = await District.countDocuments();

    // Return districts along with pagination information
    return res.status(200).json({
      message: "Districts retrieved successfully",
      data: districts,
      pagination: {
        total: totalDistricts,
        page: page,
        limit: limit,
        totalPages: Math.ceil(totalDistricts / limit),
        more: totalDistricts > skip + limit,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalDistricts / limit),
      },
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default getAllDistricts;
