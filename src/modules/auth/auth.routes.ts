// modules/auth/auth.routes.ts
import { Router } from "express";
import {registerController} from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/register", () => {});

export default authRoutes;
