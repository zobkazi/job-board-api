import express from "express";
const job = express.Router();
import { createJob, health, getAllJobs, getJobById } from "@/controllers/jobs";

job.get("/health", health);
job.post("/create-job", createJob);

job.get("/jobs", getAllJobs);
job.get("/job/:id", getJobById);

export default job;
