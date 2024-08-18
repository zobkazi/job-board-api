import { Request, Response } from "express";
import ApiKeyService from "./apiKey.service";

class ApiKeyController {
  private apiKeyService: ApiKeyService;

  constructor() {
    this.apiKeyService = new ApiKeyService();
  }

  createApiKey = async (req: Request, res: Response): Promise<void> => {
    try {
      const apiKey = await this.apiKeyService.generateApiKey();
      res.status(201).json({ apiKey });
    } catch (error) {
      res.status(500).json({ error: "Failed to create API key" });
    }
  };
}

export default ApiKeyController;
