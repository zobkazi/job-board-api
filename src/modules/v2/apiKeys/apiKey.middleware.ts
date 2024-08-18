import { Request, Response, NextFunction } from "express";
import ApiKey from "./apiKey.model";

const apiKeyValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"] as string;

  if (!apiKey) {
    return res.status(401).json({ error: "API key is missing" });
  }

  const keyExists = await ApiKey.findOne({ key: apiKey });

  if (!keyExists) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  next();
};

export default apiKeyValidationMiddleware;
