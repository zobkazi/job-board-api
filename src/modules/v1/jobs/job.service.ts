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



// Create a new job 3party collection service


// Get all jobs with pagination service
export const getJobsService = async (
  page: number,
  limit: number,
  search: string
) => {
  try {
    const query = search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const totalJobs = await Job.countDocuments(query);
    const jobs = await Job.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalJobs / limit);

    return {
      pagination: {
        totalJobs,
        totalPages,
        currentPage: page,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
        nextLink:
          page < totalPages ? `/job?page=${page + 1}&limit=${limit}` : null,
        prevLink: page > 1 ? `/job?page=${page - 1}&limit=${limit}` : null,
      },
      jobs,
    };
  } catch (error) {
    throw new Error(`Error fetching Jobs`);
  }
};

// Get a job by ID service
export const getByIdJobService = async (id: string) => {
  try {
    const job = await Job.findById(id);
    if (!job) {
      throw new Error("Job not found");
    }
    return job;
  } catch (error) {
    throw new Error(`Error fetching Jobs`);
  }
};

// Update a job by ID
export const updateJobService = async (
  id: string,
  data: TJobValidationSchema
) => {
  try {
    const job = await Job.findByIdAndUpdate(id, data, { new: true });
    if (!job) {
      throw new Error("Job not found");
    }
    return job;
  } catch (error) {
    throw new Error(`Error updating Jobs`);
  }
};

// Delete a job by ID
export const deleteJobService = async (id: string) => {
  try {
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      throw new Error("Job not found");
    }
    return job;
  } catch (error) {
    throw new Error(`Error deleting Jobs`);
  }
};

// Search jobs by query
export const searchJobService = async (query: string) => {
  try {
    const jobs = await Job.find({ title: { $regex: query, $options: "i" } });
    return jobs;
  } catch (error) {
    throw new Error(`Error searching Jobs`);
  }
};

// Get jobs by user ID
export const getJobByUserService = async (userId: string) => {
  try {
    const jobs = await Job.find({ user_id: userId });
    return jobs;
  } catch (error) {
    throw new Error(`Error fetching jobs for user: ${userId}`);
  }
};
