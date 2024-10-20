"use strict";
// src/modules/v1/jobs/job.service.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobByUserService = exports.searchJobService = exports.deleteJobService = exports.updateJobService = exports.getByIdJobService = exports.getJobsService = exports.createJobService = void 0;
const job_model_1 = __importDefault(require("./job.model"));
// Create a new job
const createJobService = async (data) => {
    // check if job already exists
    const existingJob = await job_model_1.default.findOne({
        title: data.title,
        user_id: data.user_id,
    });
    if (existingJob) {
        throw new Error("Job with this title already exists");
    }
    // create new job
    const job = await job_model_1.default.create(data);
    return job;
};
exports.createJobService = createJobService;
// Create a new job 3party collection service
// Get all jobs with pagination service
const getJobsService = async (page, limit, search) => {
    try {
        const query = search
            ? {
                $or: [
                    { title: { $regex: search, $options: "i" } },
                    { description: { $regex: search, $options: "i" } },
                ],
            }
            : {};
        const totalJobs = await job_model_1.default.countDocuments(query);
        const jobs = await job_model_1.default.find(query)
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
                nextLink: page < totalPages ? `/job?page=${page + 1}&limit=${limit}` : null,
                prevLink: page > 1 ? `/job?page=${page - 1}&limit=${limit}` : null,
            },
            jobs,
        };
    }
    catch (error) {
        throw new Error(`Error fetching Jobs`);
    }
};
exports.getJobsService = getJobsService;
// Get a job by ID service
const getByIdJobService = async (id) => {
    try {
        const job = await job_model_1.default.findById(id);
        if (!job) {
            throw new Error("Job not found");
        }
        return job;
    }
    catch (error) {
        throw new Error(`Error fetching Jobs`);
    }
};
exports.getByIdJobService = getByIdJobService;
// Update a job by ID
const updateJobService = async (id, data) => {
    try {
        const job = await job_model_1.default.findByIdAndUpdate(id, data, { new: true }).select("-user_id");
        if (!job) {
            throw new Error("Job not found");
        }
        return job;
    }
    catch (error) {
        throw new Error(`Error updating Jobs`);
    }
};
exports.updateJobService = updateJobService;
// Delete a job by ID
const deleteJobService = async (id) => {
    try {
        const job = await job_model_1.default.findByIdAndDelete(id);
        if (!job) {
            throw new Error("Job not found");
        }
        return job;
    }
    catch (error) {
        throw new Error(`Error deleting Jobs`);
    }
};
exports.deleteJobService = deleteJobService;
// Search jobs by query
const searchJobService = async (query) => {
    try {
        const jobs = await job_model_1.default.find({ title: { $regex: query, $options: "i" } });
        return jobs;
    }
    catch (error) {
        throw new Error(`Error searching Jobs`);
    }
};
exports.searchJobService = searchJobService;
// Get jobs by user ID
const getJobByUserService = async (userId) => {
    try {
        const jobs = await job_model_1.default.find({ user_id: userId });
        return jobs;
    }
    catch (error) {
        throw new Error(`Error fetching jobs for user: ${userId}`);
    }
};
exports.getJobByUserService = getJobByUserService;
//# sourceMappingURL=job.service.js.map