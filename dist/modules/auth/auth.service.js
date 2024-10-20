"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordService = exports.validateResetCodeService = exports.forgotPasswordService = exports.signinService = exports.siginUpService = void 0;
// src/modules/auth/auth.service.ts
const user_model_1 = __importDefault(require("../user/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const email_utility_1 = require("../email/email.utility");
// signup.service
const siginUpService = async (data) => {
    // Check if email already exists
    const existingEmail = await user_model_1.default.findOne({ email: data.email });
    if (existingEmail) {
        throw new Error("Email already taken");
    }
    // Hash the password before saving the user
    const hashedPassword = await bcryptjs_1.default.hash(data.password, 10);
    data.password = hashedPassword;
    const user = await user_model_1.default.create(data);
    // Send sign-up success email
    try {
        await (0, email_utility_1.sendEmail)(user.email, "Sign-up Notification", "You have successfully signed up!");
    }
    catch (error) {
        console.error("Failed to send sign-up email:", error);
    }
    // Return the created user
    return user;
};
exports.siginUpService = siginUpService;
// auth.service.ts
const signinService = async (data) => {
    // Check if user exists
    const user = await user_model_1.default.findOne({ email: data.email });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    // Validate password
    const isPasswordValid = await bcryptjs_1.default.compare(data.password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }
    // Define the JWT secret and expiration time
    const secret = process.env.JWT_SECRET || "kazi";
    const expiresIn = "1d";
    // Generate the JWT token
    const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
    };
    const token = jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
    // Send sign-in success email
    try {
        await (0, email_utility_1.sendEmail)(user.email, "Sign-in Notification", "You have successfully signed in!");
    }
    catch (error) {
        console.error("Failed to send sign-in email:", error);
    }
    // Return the user and the token
    return token;
};
exports.signinService = signinService;
// Forgot Password
const forgotPasswordService = async (email) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    // Generate a 6 digit code
    const code = crypto_1.default.randomInt(100000, 999999).toString();
    // Set expiry time for 2 minutes from now
    const expiryTime = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes from now
    // Store the code in the user model (you may need to add this field in your User schema)
    user.resetCode = code;
    user.resetCodeExpiry = expiryTime;
    await user.save();
    // Send password reset email
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
// Validate Code Service
const validateResetCodeService = async (email, code) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user || user.resetCode !== code) {
        throw new Error("Invalid code or user not found");
    }
    // Check if the reset code is expired
    if (user.resetCodeExpiry && user.resetCodeExpiry < new Date()) {
        throw new Error("Reset code has expired");
    }
    return true;
};
exports.validateResetCodeService = validateResetCodeService;
// Change Password Service
const changePasswordService = async (email, newPassword) => {
    const user = await user_model_1.default.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    // Hash the new password
    user.password = await bcryptjs_1.default.hash(newPassword, 10);
    user.resetCode = undefined; // Clear the reset code after password change
    await user.save();
    console.log("new password", user.password);
    // Send password change success email
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