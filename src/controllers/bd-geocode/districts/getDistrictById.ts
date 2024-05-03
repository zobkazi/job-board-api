import { Request, Response, NextFunction } from "express";
import District from "@/models/District";
import { isValidObjectId } from "mongoose";

const getDistrictById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Validate if ID is a valid ObjectId
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid district ID",
      });
    }

    // Find district by ID
    const district = await District.findById(id);

    // Check if district exists
    if (!district) {
      return res.status(404).json({
        message: "District not found",
      });
    }

    // Return district data
    return res.status(200).json({
      message: "District retrieved successfully",
      data: district,
    });
  } catch (error: any) {
    // Handle errors
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid district ID",
      });
    }
    // Pass other errors to Express error handler
    next(error);
  }
};

export default getDistrictById;
