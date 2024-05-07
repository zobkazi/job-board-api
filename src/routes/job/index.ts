import express from "express";
const job = express.Router();
import { createJob, health, getAllJobs } from "@/controllers/jobs";

job.get("/health", health);
job.post("/create-job", createJob);

job.get("/jobs", getAllJobs);

export default job;
