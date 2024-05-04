// import { Request, Response, NextFunction } from "express";
// import Division from "@/models/Divisions";

// const getAllDivision = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     // Pagination parameters
//     const page = parseInt(req.query.page as string) || 1; // Default to page 1
//     const limit = parseInt(req.query.limit as string) || 3; // Default limit to 10 divisions per page

//     // Calculate skip value for pagination
//     const skip = (page - 1) * limit;

//     // Query divisions from database with pagination
//     const divisions = await Division.find().skip(skip).limit(limit);

//     // Return divisions
//     return res.status(200).json({
//       message: "Divisions retrieved successfully",
//       data: divisions,
//     });
//   } catch (error) {
//     // Pass error to Express error handler
//     next(error);
//   }
// };

// export default getAllDivision;

import { Request, Response, NextFunction } from "express";
import Division from "@/models/Divisions";

const getAllDivision = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = 10; // Display three divisions at a time

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Query divisions from database with pagination
    const divisions = await Division.find().skip(skip).limit(limit);

    // Check if there are more divisions
    const moreDivisions = (await Division.countDocuments()) > skip + limit;

    // Return divisions
    return res.status(200).json({
      message: "Divisions retrieved successfully",
      data: divisions,
      moreDivisions: moreDivisions,
      currentPage: page,
      totalPages: Math.ceil((await Division.countDocuments()) / limit),
      totalDivisions: await Division.countDocuments(),
      limit: limit,
    });
  } catch (error) {
    // Pass error to Express error handler
    next(error);
  }
};

export default getAllDivision;
