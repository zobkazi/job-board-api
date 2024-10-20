import { Request, Response, NextFunction } from "express";
export declare const createJobController: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getJobsController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getJobByIdController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateJobController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteJobController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const searchJobsController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getJobsByUserController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
