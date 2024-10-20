"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordService = exports.validateResetCodeService = exports.forgotPasswordService = exports.signinService = exports.siginUpService = void 0;
const user_model_1 = __importDefault(require("../user/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const email_utility_1 = require("../email/email.utility");
const siginUpService = async (data) => {
    const existingEmail = await user_model_1.default.findOne({ email: data.email });
    if (existingEmail) {
        throw new Error("Email already taken");
    }
    const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
    data.password = hashedPassword;
    const user = await user_model_1.default.create(data);
    try {
        await (0, email_utility_1.sendEmail)(user.email, "Sign-up Notification", "You have successfully signed up!");
    }
    catch (error) {
        console.error("Failed to send sign-up email:", error);
    }
    return user;
};
exports.siginUpService = siginUpService;
const signinService = async (data) => {
    const user = await user_model_1.default.findOne({ email: data.email });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const isPasswordValid = await bcryptjs_1.default.compare(data.password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }
    const secret = process.env.JWT_SECRET || "kazi";
    const expiresIn = "1d";
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
    };
    const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
    try {
        await (0, email_utility_1.sendEmail)(user.email, "Sign-in Notification", "You have successfully signed in!");
    }
    catch (error) {
        console.error("Failed to send sign-in email:", error);
    }
    return token;
};
exports.signinService = signinService;
const forgotPasswordService = async (email) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const code = crypto_1.default.randomInt(100000, 999999).toString();
    const expiryTime = new Date(Date.now() + 2 * 60 * 1000);
    user.resetCode = code;
    user.resetCodeExpiry = expiryTime;
    await user.save();
    try {
        await (0, email_utility_1.sendEmail)(user.email, "Password Reset", `Your password reset code is: ${code}, it will expire in 2 minutes.`);
        return "Code sent to your email";
    }
    catch (error) {
        console.error("Failed to send password reset email:", error);
    }
    return "Reset code sent to your email.";
};
exports.forgotPasswordService = forgotPasswordService;
const validateResetCodeService = async (email, code) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user || user.resetCode !== code) {
        throw new Error("Invalid code or user not found");
    }
    if (user.resetCodeExpiry && user.resetCodeExpiry < new Date()) {
        throw new Error("Reset code has expired");
    }
    return true;
};
exports.validateResetCodeService = validateResetCodeService;
const changePasswordService = async (email, newPassword) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    user.password = await bcryptjs_1.default.hash(newPassword, 10);
    user.resetCode = undefined;
    await user.save();
    console.log("new password", user.password);
    try {
        await (0, email_utility_1.sendEmail)(user.email, "Password Changed", "Your password has been changed successfully.");
    }
    catch (error) {
        console.error("Failed to send password change email:", error);
    }
    return "Password changed successfully.";
};
exports.changePasswordService = changePasswordService;
//# sourceMappingURL=auth.service.js.map