"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.getUserByIdController = void 0;
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
const getUserByIdController = async (req, res, next) => {
    try {
        const user = await (0, user_service_1.getUserByIdService)(req.params.id);
        if (!user) {
            throw new Error("User not found. Please try again.");
        }
        res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getUserByIdController = getUserByIdController;
const updateUserController = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const updateData = user_validation_1.updateUserSchema.parse(req.body);
        const updatedUser = await (0, user_service_1.updateUserService)(userId, updateData);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.updateUserController = updateUserController;
const deleteUserController = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deletedUser = await (0, user_service_1.deleteUserService)(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=user.controller.js.map