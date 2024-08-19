// modules/auth/auth.routes.ts
import { Router } from "express";
import { siginUpController, signinController } from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", siginUpController);

authRoutes.post("/signin", signinController);

export default authRoutes;
