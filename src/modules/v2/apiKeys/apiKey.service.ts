import ApiKey from "./apiKey.model";
import crypto from "crypto";

class ApiKeyService {
  async generateApiKey(): Promise<string> {
    try {
      const key = crypto.randomBytes(32).toString("hex");
      await ApiKey.create({ key });
      return key;
    } catch (error) {
      throw new Error("Failed to generate API key");
    }
  }
}

export default ApiKeyService;
