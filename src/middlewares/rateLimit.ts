import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each API key to 100 requests per windowMs
  message: "Too many requests from this API key, please try again later",
  keyGenerator: (req) => req.headers["x-api-key"] as string,
});

export default rateLimiter;
