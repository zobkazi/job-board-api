import { ZodError } from 'zod';
export declare const handleZodError: (err: ZodError) => {
    path: string | number;
    message: string;
}[];
