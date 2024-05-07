import { Request, Response, NextFunction } from "express";
import JobTypes from "@/types/JobsTypes";
import Job from "@/models/Job";

const getJobById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // Find job by ID
    const job = await Job.findById(id);

    // Check if job exists
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    // Return job data
    return res.status(200).json({
      message: "Job retrieved successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export default getJobById;
