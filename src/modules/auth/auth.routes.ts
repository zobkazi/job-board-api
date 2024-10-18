// modules/auth/auth.routes.ts
import { Router } from "express";
import { siginUpController, signinController, changePasswordController, forgotPasswordController, validateResetCodeController } from "./auth.controller";

const authRoutes = Router();

authRoutes.post("/signup", siginUpController);
authRoutes.post("/signin", signinController);



authRoutes.post("/forgot-password", forgotPasswordController);
authRoutes.post("/validate-code", validateResetCodeController);
authRoutes.post("/change-password", changePasswordController);


export default authRoutes;
