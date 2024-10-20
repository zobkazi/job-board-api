"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiKeyRoutes = (0, express_1.Router)();
const apiKey_controller_1 = __importDefault(require("./apiKey.controller"));
const apiKey_middleware_1 = __importDefault(require("./apiKey.middleware"));
const rateLimit_1 = __importDefault(require("../../../middlewares/rateLimit"));
const apiKeyController = new apiKey_controller_1.default();
apiKeyRoutes.post("/api-keys", apiKeyController.createApiKey);
apiKeyRoutes.get("/profile", rateLimit_1.default, apiKey_middleware_1.default, (req, res) => {
    res.status(200).json({
        status: 200,
        message: "success",
    });
});
exports.default = apiKeyRoutes;
//# sourceMappingURL=apiKey.routes.js.map