import { z } from 'zod';
export declare const emailSchema: z.ZodObject<{
    recipient: z.ZodString;
    subject: z.ZodString;
    message: z.ZodString;
    sender: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message: string;
    recipient: string;
    subject: string;
    sender?: string | undefined;
    source?: string | undefined;
}, {
    message: string;
    recipient: string;
    subject: string;
    sender?: string | undefined;
    source?: string | undefined;
}>;
export type TEmail = z.infer<typeof emailSchema>;
