"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const rateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each API key to 100 requests per windowMs
    message: "Too many requests from this API key, please try again later",
    keyGenerator: (req) => req.headers["x-api-key"],
});
exports.default = rateLimiter;
//# sourceMappingURL=rateLimit.js.map