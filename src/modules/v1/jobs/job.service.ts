// src/modules/v1/jobs/job.service.ts

import Job from "./job.model";
import { TJobValidationSchema } from "./job.validation";
import { Document } from "mongoose";

// Create a new job
export const createJobService = async (
  data: TJobValidationSchema
): Promise<Document> => {
  // check if job already exists
  const existingJob = await Job.findOne({
    title: data.title,
  });
  if (existingJob) {
    throw new Error("Job with this title already exists");
  }
  // create new job
  const job = await Job.create(data);
  return job;
};

// // Get all jobs
// export const getJobsService = async (page: number, limit: number) => {
//   try {
//     const jobs = await Job.find()
//       .skip((page - 1) * limit)
//       .limit(limit);
//     return jobs;
//   } catch (error) {
//     throw new Error(`Error fetching jobs: ${error.message}`);
//   }
// };

// // Get a job by ID
// export const getByIdJobService = async (id: string) => {
//   try {
//     const job = await Job.findById(id);
//     if (!job) {
//       throw new Error("Job not found");
//     }
//     return job;
//   } catch (error) {
//     throw new Error(`Error fetching job: ${error.message}`);
//   }
// };

// // Update a job by ID
// export const updateJobService = async (
//   id: string,
//   data: TJobValidationSchema
// ) => {
//   try {
//     const job = await Job.findByIdAndUpdate(id, data, { new: true });
//     if (!job) {
//       throw new Error("Job not found");
//     }
//     return job;
//   } catch (error) {
//     throw new Error(`Error updating job: ${error.message}`);
//   }
// };

// // Delete a job by ID
// export const deleteJobService = async (id: string) => {
//   try {
//     const job = await Job.findByIdAndDelete(id);
//     if (!job) {
//       throw new Error("Job not found");
//     }
//     return job;
//   } catch (error) {
//     throw new Error(`Error deleting job: ${error.message}`);
//   }
// };

// // Search jobs by query
// export const searchJobService = async (query: string) => {
//   try {
//     const jobs = await Job.find({ title: { $regex: query, $options: "i" } });
//     return jobs;
//   } catch (error) {
//     throw new Error(`Error searching jobs: ${error.message}`);
//   }
// };

// // Get jobs by user ID
// export const getJobByUserService = async (userId: string) => {
//   try {
//     const jobs = await Job.find({ user_id: userId });
//     return jobs;
//   } catch (error) {
//     throw new Error(`Error fetching jobs for user: ${error.message}`);
//   }
// };
