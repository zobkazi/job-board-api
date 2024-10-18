// src/modules/email/email.validation.ts
import {z} from 'zod';


export const emailSchema = z.object({
    recipient: z.string({
        required_error: "recipient is required",
        invalid_type_error: "recipient must be a string",
    }),
    subject: z.string({
        required_error: "subject is required",
        invalid_type_error: "subject must be a string",
    }),
    message: z.string({
        required_error: "message is required",
        invalid_type_error: "message must be a string",
    }),
    sender: z.string().optional(),
    source: z.string().optional(),

})

export type TEmail = z.infer<typeof emailSchema>