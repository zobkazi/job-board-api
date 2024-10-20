import { Request, Response } from "express";
declare class ApiKeyController {
    private apiKeyService;
    constructor();
    createApiKey: (req: Request, res: Response) => Promise<void>;
}
export default ApiKeyController;
