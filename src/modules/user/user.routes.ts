// modules/auth/auth.routes.ts
import { Router } from "express";

import { getProfile, getUserByIdController, updateProfile } from "./user.controller";

import verifyToken from "../auth/auth.middleware";

const userRoutes = Router();

userRoutes.get("/profile", verifyToken, getProfile);


userRoutes.put("/profile", verifyToken, updateProfile);




userRoutes.get("/:id", getUserByIdController);

export default userRoutes;
