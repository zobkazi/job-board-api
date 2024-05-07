import { Request, Response, NextFunction } from "express";
import Job from "@/models/Job";

const getAllJobs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1; // Current page number, default to 1 if not provided
    const limit = parseInt(req.query.limit as string) || 10; // Number of documents per page, default to 10 if not provided

    // Calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // Query jobs with pagination
    const jobs = await Job.find().skip(skip).limit(limit);

    // Count total jobs
    const totalJobs = await Job.countDocuments();

    // Return jobs along with pagination information

    return res.status(200).json({
      message: "Jobs retrieved successfully",
      data: jobs,
      pagination: {
        page,
        limit,
        totalJobs,
        totalPages: Math.ceil(totalJobs / limit),
        more: totalJobs > skip + limit,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalJobs / limit),
        firstPage: 1,
        currentPage: page,
      },
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};

export default getAllJobs;
