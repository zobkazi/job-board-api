// modules/auth/auth.routes.ts
import { Router } from "express";

import { getProfile } from "./user.controller";

import verifyToken from "../auth/auth.middleware";

const userRoutes = Router();

userRoutes.get("/profile", verifyToken, getProfile);

export default userRoutes;
