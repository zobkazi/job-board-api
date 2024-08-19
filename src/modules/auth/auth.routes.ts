// modules/auth/auth.routes.ts
import { Router } from "express";
import { siginUpController } from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", siginUpController);

export default authRoutes;
