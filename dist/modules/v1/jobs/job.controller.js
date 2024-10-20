"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobsByUserController = exports.searchJobsController = exports.deleteJobController = exports.updateJobController = exports.getJobByIdController = exports.getJobsController = exports.createJobController = void 0;
const job_service_1 = require("./job.service");
const job_validation_1 = require("./job.validation");
const createJobController = async (req, res, next) => {
    const parsedBody = job_validation_1.JobSchema.safeParse(req.body);
    if (!parsedBody.success) {
        return res.status(400).json({
            success: false,
            error: parsedBody.error,
        });
    }
    try {
        const authUserId = req.user?.id;
        if (!authUserId) {
            throw new Error("User not found");
        }
        const jobData = {
            ...parsedBody.data,
            user_id: authUserId
        };
        const job = await (0, job_service_1.createJobService)(jobData);
        res.status(201).json({
            success: true,
            message: "Job created successfully",
            data: job,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createJobController = createJobController;
const getJobsController = async (req, res, next) => {
    const { page = 1, limit = 3, search = "" } = req.query;
    try {
        const jobsData = await (0, job_service_1.getJobsService)(Number(page), Number(limit), String(search));
        res.status(200).json(jobsData);
    }
    catch (error) {
        next(error);
    }
};
exports.getJobsController = getJobsController;
const getJobByIdController = async (req, res, next) => {
    try {
        const job = await (0, job_service_1.getByIdJobService)(req.params.id);
        res.status(200).json(job);
    }
    catch (error) {
        next(error);
    }
};
exports.getJobByIdController = getJobByIdController;
const updateJobController = async (req, res, next) => {
    try {
        const job = await (0, job_service_1.updateJobService)(req.params.id, req.body);
        res.status(200).json(job);
    }
    catch (error) {
        next(error);
    }
};
exports.updateJobController = updateJobController;
const deleteJobController = async (req, res, next) => {
    try {
        await (0, job_service_1.deleteJobService)(req.params.id);
        res.status(204).json({ message: "Job deleted successfully" });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteJobController = deleteJobController;
const searchJobsController = async (req, res, next) => {
    try {
        const jobs = await (0, job_service_1.searchJobService)(req.query.query);
        res.status(200).json(jobs);
    }
    catch (error) {
        next(error);
    }
};
exports.searchJobsController = searchJobsController;
const getJobsByUserController = async (req, res, next) => {
    try {
        const jobs = await (0, job_service_1.getJobByUserService)(req.params.userId);
        res.status(200).json(jobs);
    }
    catch (error) {
        next(error);
    }
};
exports.getJobsByUserController = getJobsByUserController;
//# sourceMappingURL=job.controller.js.map