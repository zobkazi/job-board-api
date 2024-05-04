import { Request, Response, NextFunction } from "express";
import Upazila from "@/models/Upazila";
import UpazilasData from "@/config/upazilas";

const saveUpazilaToJson = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Iterate over the DivisionsData array
    for (const upazilasData of UpazilasData) {
      // Check if a division with the same name already exists
      const existingDivision = await Upazila.findOne({
        name: upazilasData.name,
      });

      if (existingDivision) {
        res.status(500).json({
          message: "Upazila already exists",
        });
      } else {
        // Create a new division document
        const NewUpazila = new Upazila(upazilasData);
        // Save the new division to the database
        await NewUpazila.save();
      }
    }
    res.status(200).json({ message: "Upazila data saved successfully" });
  } catch (error) {
    next(error);
  }
};

export default saveUpazilaToJson;
