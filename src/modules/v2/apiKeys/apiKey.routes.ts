import { Router } from "express";
const apiKeyRoutes: Router = Router();
import ApiKeyController from "./apiKey.controller";
import apiKeyMiddleware from "./apiKey.middleware";
import rateLimiter from "../../../middlewares/rateLimit";

const apiKeyController = new ApiKeyController();

apiKeyRoutes.post("/api-keys", apiKeyController.createApiKey);

apiKeyRoutes.get("/profile", rateLimiter, apiKeyMiddleware, (req, res) => {
  res.status(200).json({
    status: 200,
    message: "success",
  });
});

export default apiKeyRoutes;
