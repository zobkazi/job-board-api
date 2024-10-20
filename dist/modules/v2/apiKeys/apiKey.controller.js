"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey_service_1 = __importDefault(require("./apiKey.service"));
class ApiKeyController {
    constructor() {
        this.createApiKey = async (req, res) => {
            try {
                const apiKey = await this.apiKeyService.generateApiKey();
                res.status(201).json({ apiKey });
            }
            catch (error) {
                res.status(500).json({ error: "Failed to create API key" });
            }
        };
        this.apiKeyService = new apiKey_service_1.default();
    }
}
exports.default = ApiKeyController;
//# sourceMappingURL=apiKey.controller.js.map