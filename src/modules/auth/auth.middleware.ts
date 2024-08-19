// src/modules/auth/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }
  const secret = process.env.JWT_SECRET as string || "kazi";
  
    try {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
          }
          return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded as any; // Type assertion to `any`
        next();
      });
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token has expired." });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(400).json({ message: "Invalid token." });
      } else {
        return res
          .status(500)
          .json({ message: "Failed to authenticate token." });
      }
    }
};

export default authMiddleware;
