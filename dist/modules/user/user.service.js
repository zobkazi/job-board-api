"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.getUserByIdService = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const getUserByIdService = async (id) => {
    const user = await user_model_1.default.findById(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
exports.getUserByIdService = getUserByIdService;
const updateUserService = async (userId, updateData) => {
    const user = await user_model_1.default.findByIdAndUpdate(userId, updateData, {
        new: true,
        runValidators: true,
    }).select("-password");
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
exports.updateUserService = updateUserService;
const deleteUserService = async (userId) => {
    const user = await user_model_1.default.findByIdAndDelete(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
exports.deleteUserService = deleteUserService;
//# sourceMappingURL=user.service.js.map