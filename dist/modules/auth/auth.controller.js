"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordController = exports.validateResetCodeController = exports.forgotPasswordController = exports.signinController = exports.siginUpController = void 0;
const auth_service_1 = require("./auth.service");
const auth_validation_1 = require("./auth.validation");
const siginUpController = async (req, res, next) => {
    const parsedBody = auth_validation_1.siginUpSchema.safeParse(req.body);
    if (!parsedBody.success) {
        return res.status(400).json({
            success: false,
            error: parsedBody.error,
        });
    }
    try {
        const user = await (0, auth_service_1.siginUpService)(parsedBody.data);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.siginUpController = siginUpController;
const signinController = async (req, res, next) => {
    const parsedBody = auth_validation_1.sigiInSchema.safeParse(req.body);
    if (!parsedBody.success) {
        return res.status(400).json({
            success: false,
            error: parsedBody.error,
        });
    }
    try {
        const token = await (0, auth_service_1.signinService)(parsedBody.data);
        if (!token) {
            throw new Error("Invalid email or password");
        }
        res.setHeader("Authorization", `Bearer ${token}`);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
            sameSite: "none",
        });
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.signinController = signinController;
const forgotPasswordController = async (req, res, next) => {
    const { email } = req.body;
    try {
        const message = await (0, auth_service_1.forgotPasswordService)(email);
        res.status(200).json({ success: true, message });
    }
    catch (err) {
        next(err);
    }
};
exports.forgotPasswordController = forgotPasswordController;
const validateResetCodeController = async (req, res, next) => {
    const { email, code } = req.body;
    try {
        await (0, auth_service_1.validateResetCodeService)(email, code);
        res.status(200).json({ success: true, message: "Code is valid." });
    }
    catch (err) {
        next(err);
    }
};
exports.validateResetCodeController = validateResetCodeController;
const changePasswordController = async (req, res, next) => {
    const { email, newPassword } = req.body;
    try {
        const message = await (0, auth_service_1.changePasswordService)(email, newPassword);
        res.status(200).json({ success: true, message });
    }
    catch (err) {
        next(err);
    }
};
exports.changePasswordController = changePasswordController;
//# sourceMappingURL=auth.controller.js.map