"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const authRoutes = (0, express_1.Router)();
authRoutes.post("/signup", auth_controller_1.siginUpController);
authRoutes.post("/signin", auth_controller_1.signinController);
authRoutes.post("/forgot-password", auth_controller_1.forgotPasswordController);
authRoutes.post("/validate-code", auth_controller_1.validateResetCodeController);
authRoutes.post("/change-password", auth_controller_1.changePasswordController);
exports.default = authRoutes;
//# sourceMappingURL=auth.routes.js.map