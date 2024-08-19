// src/types/express.d.ts
import { Document } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      user?: Document; // or you can define a specific user type if you have one
    }
  }
}
