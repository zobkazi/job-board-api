import { Request, Response, NextFunction } from "express";
import { DivisionTypes } from "@/types/DivisionTypes";
import Division from "@/models/Divisions";

const createDivision = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // req body
    const parsedBody = DivisionTypes.safeParse(req.body);

    // check if req body is valid
    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Invalid request body",
        errors: parsedBody.error.errors,
      });
    }

    // check if division already exists
    const existingDivision = await Division.findOne({
      name: parsedBody.data.name,
    });

    if (existingDivision) {
      return res.status(400).json({
        message: "Division already exists",
      });
    }

    // Create new division
    const division = new Division({
      name: parsedBody.data.name,
      bn_name: parsedBody.data.bn_name,
      url: parsedBody.data.url,
    });

    // save division
    await division.save();

    // return response
    return res.status(201).json({
      message: "Division created successfully",
      data: division,
    });
  } catch (error) {
    next(error);
  }
};

export default createDivision;
