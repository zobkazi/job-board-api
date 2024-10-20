"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUEUE_URL = exports.defaultSender = exports.transporter = exports.refresh_token_expiry = exports.access_token_expiry = exports.saltRound = exports.defaultPass = exports.refresh_token = exports.access_token = exports.corsOrigin = exports.redisUrl = exports.mongoUrl = exports.port = exports.frontendUrl = exports.baseUrl = exports.NODE_ENV = void 0;
require("dotenv/config");
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.NODE_ENV = process.env.NODE_ENV;
exports.baseUrl = process.env.BASE_URL;
exports.frontendUrl = process.env.FRONTEND_URL;
exports.port = process.env.PORT;
// for Database Connection
exports.mongoUrl = process.env.MONGO_URI || "";
exports.redisUrl = process.env.REDIS_URI || "";
//  for Authencticaion and Security
exports.corsOrigin = process.env.ORIGIN;
exports.access_token = process.env.ACCESS_TOKEN || "";
exports.refresh_token = process.env.REFRESH_TOKEN || "";
exports.defaultPass = process.env.DEFAULT_PASS;
exports.saltRound = process.env.SALT_ROUND;
exports.access_token_expiry = process.env.ACCESS_TOKEN_EXPIRE || "";
exports.refresh_token_expiry = process.env.REFRESH_TOKEN_EXPIRE || "";
//  For Email Server
exports.transporter = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "2525"),
    debug: true,
    logger: true,
});
exports.defaultSender = process.env.DEFAULT_SENDER_EMAIL || "admin@example.com";
exports.QUEUE_URL = process.env.QUEUE_URL || "amqp://localhost";
//# sourceMappingURL=index.js.map