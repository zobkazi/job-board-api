import { NextFunction, Request, Response } from 'express';
export declare const getAllEmails: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const sendEmail: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
