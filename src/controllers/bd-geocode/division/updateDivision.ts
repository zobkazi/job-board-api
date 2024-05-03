import { Request, Response, NextFunction } from "express";
import { DivisionTypes } from "@/types/DivisionTypes";
import Division from "@/models/Divisions";

const updateDivision = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Parse request body using Zod schema
    const parsedBody = DivisionTypes.safeParse(req.body);

    // Check if request body is valid
    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Invalid request body",
        errors: parsedBody.error.flatten(),
      });
    }

    // Find division by ID
    const division = await Division.findById(id);

    // Check if division exists
    if (!division) {
      return res.status(404).json({
        message: "Division not found",
      });
    }

    // Update division properties
    if (parsedBody.data.name) division.name = parsedBody.data.name;
    if (parsedBody.data.bn_name) division.bn_name = parsedBody.data.bn_name;
    if (parsedBody.data.url) division.url = parsedBody.data.url;

    // Save updated division to database
    await division.save();

    // Return success response
    return res.status(200).json({
      message: "Division updated successfully",
      data: division,
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default updateDivision;
