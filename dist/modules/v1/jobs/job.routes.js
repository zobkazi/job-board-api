"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobRoutes = (0, express_1.Router)();
const job_controller_1 = require("./job.controller");
const auth_middleware_1 = __importDefault(require("../../auth/auth.middleware"));
jobRoutes.post("/create", auth_middleware_1.default, job_controller_1.createJobController);
jobRoutes.get("/", job_controller_1.getJobsController);
jobRoutes.get("/:id", job_controller_1.getJobByIdController);
jobRoutes.put("/update/:id", job_controller_1.updateJobController);
jobRoutes.delete("/:id", job_controller_1.deleteJobController);
jobRoutes.get("/:userId", job_controller_1.getJobsByUserController);
jobRoutes.get("/search", job_controller_1.searchJobsController);
exports.default = jobRoutes;
//# sourceMappingURL=job.routes.js.map