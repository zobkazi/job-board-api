"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey_model_1 = __importDefault(require("./apiKey.model"));
const crypto_1 = __importDefault(require("crypto"));
class ApiKeyService {
    async generateApiKey() {
        try {
            const key = crypto_1.default.randomBytes(32).toString("hex");
            await apiKey_model_1.default.create({ key });
            return key;
        }
        catch (error) {
            throw new Error("Failed to generate API key");
        }
    }
}
exports.default = ApiKeyService;
//# sourceMappingURL=apiKey.service.js.map