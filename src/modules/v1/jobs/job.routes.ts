// modules/auth/auth.routes.ts
import { Router } from "express";
const jobRoutes = Router();
import { createJobController } from "./job.controller";

jobRoutes.post("/create", createJobController);

export default jobRoutes;
