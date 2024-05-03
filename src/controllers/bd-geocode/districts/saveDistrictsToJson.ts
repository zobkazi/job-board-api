import { Request, Response, NextFunction } from "express";
import District from "@/models/District";
import DistrictsData from "@/config/districts";

const saveDistrictsData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Iterate over the DivisionsData array
    for (const districtsData of DistrictsData) {
      // Check if a division with the same name already exists
      const existingDivision = await District.findOne({
        name: districtsData.name,
      });

      if (existingDivision) {
        res.status(500).json({
          message: "Division already exists",
        });
      } else {
        // Create a new division document
        const newDivision = new District(districtsData);
        // Save the new division to the database
        await newDivision.save();
      }
    }
    res.status(200).json({ message: "districtsData saved successfully" });
  } catch (error) {
    next(error);
  }
};

export default saveDistrictsData;
