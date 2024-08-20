// src/modules/v1/jobs/job.controller.ts

import { Request, Response, NextFunction } from "express";
import {
  createJobService,
  //   getJobsService,
  //   getByIdJobService,
  //   updateJobService,
  //   deleteJobService,
  //   searchJobService,
  //   getJobByUserService,
} from "./job.service";
import { JobSchema } from "./job.validation";

// Create a new job
export const createJobController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // validation of request body
  const parsedBody = JobSchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({
      success: false,
      error: parsedBody.error,
    });
  }
  try {
    const job = await createJobService(parsedBody.data);
    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// // Get all jobs with pagination
// export const getJobsController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { page = 1, limit = 10 } = req.query;
//   try {
//     const jobs = await getJobsService(Number(page), Number(limit));
//     res.status(200).json(jobs);
//   } catch (error) {
//     next(error);
//   }
// };

// // Get a job by ID
// export const getJobByIdController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const job = await getByIdJobService(req.params.id);
//     res.status(200).json(job);
//   } catch (error) {
//     next(error);
//   }
// };

// // Update a job by ID
// export const updateJobController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const job = await updateJobService(req.params.id, req.body);
//     res.status(200).json(job);
//   } catch (error) {
//     next(error);
//   }
// };

// // Delete a job by ID
// export const deleteJobController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await deleteJobService(req.params.id);
//     res.status(204).json({ message: "Job deleted successfully" });
//   } catch (error) {
//     next(error);
//   }
// };

// // Search jobs by query
// export const searchJobsController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const jobs = await searchJobService(req.query.query as string);
//     res.status(200).json(jobs);
//   } catch (error) {
//     next(error);
//   }
// };

// // Get jobs by user ID
// export const getJobsByUserController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const jobs = await getJobByUserService(req.params.userId);
//     res.status(200).json(jobs);
//   } catch (error) {
//     next(error);
//   }
// };
