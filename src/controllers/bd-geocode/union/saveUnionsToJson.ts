import { Request, Response, NextFunction } from "express";
import Union from "@/models/Unions";
import UnionsData from "@/config/unions";

const saveUnionsToJson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Iterate over the DivisionsData array
    for (const unionsData of UnionsData) {
      // Check if a division with the same name already exists
      const existingDivision = await Union.findOne({
        name: unionsData.name,
      });

      if (existingDivision) {
        res.status(500).json({
          message: "unionsData already exists",
        });
      } else {
        // Create a new division document
        const NewUnion = new Union(unionsData);
        // Save the new division to the database
        await NewUnion.save();
      }
    }
    res.status(200).json({ message: "Union data saved successfully" });
  } catch (error) {
    next(error);
  }
};

export default saveUnionsToJson;
