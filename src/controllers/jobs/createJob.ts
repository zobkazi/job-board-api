import { Request, Response, NextFunction } from "express";
import JobTypes from "@/types/JobsTypes";
import Job from "@/models/Job";

const createJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate request
    const parsedBody = JobTypes.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Invalid request body",
        errors: parsedBody.error.errors,
      });
    }
    // check if job already exists
    const existingJob = await Job.findOne({
      uid: parsedBody.data.uid,
    });
    if (existingJob) {
      return res.status(400).json({
        message: "Job already exists",
      });
    }
    // create new job
    const job = new Job(parsedBody.data);
    await job.save();
    res.status(200).json({ message: "Job created successfully", job });
  } catch (error) {
    next(error);
  }
};

export default createJob;
