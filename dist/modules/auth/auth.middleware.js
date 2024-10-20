"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res
            .status(401)
            .json({ message: "Access Denied. No token provided." });
    }
    const secret = process.env.JWT_SECRET || "kazi";
    try {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                if (err.name === "TokenExpiredError") {
                    return res.status(401).json({ message: "Token expired" });
                }
                return res.status(401).json({ message: "Invalid token" });
            }
            req.user = decoded;
            next();
        });
    }
    catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token has expired." });
        }
        else if (err.name === "JsonWebTokenError") {
            return res.status(400).json({ message: "Invalid token." });
        }
        else {
            return res
                .status(500)
                .json({ message: "Failed to authenticate token." });
        }
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map