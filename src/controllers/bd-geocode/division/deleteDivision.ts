import { Request, Response, NextFunction } from "express";
import Division from "@/models/Divisions";

const deleteDivision = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Find division by ID and delete it
    const result = await Division.deleteOne({ _id: id });

    // Check if division was found and deleted
    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Division not found",
      });
    }

    // Return success response
    return res.status(200).json({
      message: "Division deleted successfully",
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default deleteDivision;
