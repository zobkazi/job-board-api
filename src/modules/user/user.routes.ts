// modules/auth/auth.routes.ts
import { Router } from "express";

import { getUserByIdController, updateUserController, deleteUserController } from "./user.controller";

import verifyToken from "../auth/auth.middleware";


// User Management Routes
const userRoutes = Router();

userRoutes.get("/", verifyToken, getUserByIdController);

userRoutes.put("/update/:id", verifyToken, updateUserController);
 

userRoutes.delete("/delete/:id", verifyToken, deleteUserController);

export default userRoutes;
