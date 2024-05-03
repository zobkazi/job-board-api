import { Request, Response, NextFunction } from "express";
import Division from "@/models/Divisions";
import DivisionsData from "@/config/division";

const saveDivisionsToJson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Iterate over the DivisionsData array
    for (const divisionData of DivisionsData) {
      // Check if a division with the same name already exists
      const existingDivision = await Division.findOne({
        name: divisionData.name,
      });

      if (existingDivision) {
        res.status(500).json({
          message: "Division already exists",
        });
      } else {
        // Create a new division document
        const newDivision = new Division(divisionData);
        // Save the new division to the database
        await newDivision.save();
      }
    }
    res.status(200).json({ message: "Divisions saved successfully" });
  } catch (error) {
    next(error);
  }
};

export default saveDivisionsToJson;
