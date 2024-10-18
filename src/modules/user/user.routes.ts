// modules/auth/auth.routes.ts
import { Router } from "express";

import { getUserByIdController, updateUserController } from "./user.controller";

import verifyToken from "../auth/auth.middleware";

const userRoutes = Router();

userRoutes.get("/", verifyToken, getUserByIdController);

userRoutes.put("/update/:id", updateUserController);




userRoutes.get("/:id", getUserByIdController);

export default userRoutes;
