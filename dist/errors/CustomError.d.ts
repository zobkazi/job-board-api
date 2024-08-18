export declare class CustomError extends Error {
    status: number;
    message: string;
    stack: string;
    constructor(status: number, message: string, stack?: string);
}
