import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
export declare const requestValidator: (schema: AnyZodObject) => (req: Request, _res: Response, next: NextFunction) => Promise<void>;
