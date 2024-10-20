import { Request, Response, NextFunction } from "express";
export declare const siginUpController: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const signinController: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const forgotPasswordController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const validateResetCodeController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const changePasswordController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
