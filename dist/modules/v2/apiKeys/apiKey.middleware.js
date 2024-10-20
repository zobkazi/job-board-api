"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey_model_1 = __importDefault(require("./apiKey.model"));
const apiKeyValidationMiddleware = async (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        return res.status(401).json({ error: "API key is missing" });
    }
    const keyExists = await apiKey_model_1.default.findOne({ key: apiKey });
    if (!keyExists) {
        return res.status(403).json({ error: "Invalid API key" });
    }
    next();
};
exports.default = apiKeyValidationMiddleware;
//# sourceMappingURL=apiKey.middleware.js.map