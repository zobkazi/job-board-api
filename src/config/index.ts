import "dotenv/config";
import nodemailer from "nodemailer";

export const NODE_ENV = process.env.NODE_ENV;
export const baseUrl = process.env.BASE_URL;
export const frontendUrl = process.env.FRONTEND_URL;
export const port = process.env.PORT;
// for Database Connection
export const mongoUrl: string = process.env.MONGO_URI || "";
export const redisUrl: string = process.env.REDIS_URI || "";

//  for Authencticaion and Security

export const corsOrigin = process.env.ORIGIN;
export const access_token: string = process.env.ACCESS_TOKEN || "";
export const refresh_token: string = process.env.REFRESH_TOKEN || "";
export const defaultPass = process.env.DEFAULT_PASS;
export const saltRound = process.env.SALT_ROUND;
export const access_token_expiry: string =
  process.env.ACCESS_TOKEN_EXPIRE || "";
export const refresh_token_expiry: string =
  process.env.REFRESH_TOKEN_EXPIRE || "";

//  For Email Server

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.mailtrap.io",
  port: parseInt(process.env.SMTP_PORT || "2525"),
});

export const defaultSender =
  process.env.DEFAULT_SENDER_EMAIL || "admin@example.com";

export const QUEUE_URL = process.env.QUEUE_URL || "amqp://localhost";