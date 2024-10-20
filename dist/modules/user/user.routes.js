"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules/auth/auth.routes.ts
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_middleware_1 = __importDefault(require("../auth/auth.middleware"));
// User Management Routes
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", auth_middleware_1.default, user_controller_1.getUserByIdController);
userRoutes.put("/update/:id", auth_middleware_1.default, user_controller_1.updateUserController);
userRoutes.delete("/delete/:id", auth_middleware_1.default, user_controller_1.deleteUserController);
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map