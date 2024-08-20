// modules/auth/auth.routes.ts
import { Router } from "express";
const jobRoutes = Router();
import {
  createJobController,
  getJobsController,
  getJobByIdController,
  updateJobController,
  deleteJobController,
  getJobsByUserController,
  searchJobsController,
} from "./job.controller";

jobRoutes.post("/create", createJobController);

jobRoutes.get("/", getJobsController);

jobRoutes.get("/:id", getJobByIdController);

jobRoutes.put("/:id", updateJobController);

jobRoutes.delete("/:id", deleteJobController);

jobRoutes.get("/:userId", getJobsByUserController);

jobRoutes.get("/search", searchJobsController);

export default jobRoutes;
