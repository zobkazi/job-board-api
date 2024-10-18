import {z} from 'zod';


export const emailSchema = z.object({
    email: z
        .string({
            required_error: "email is required",
            invalid_type_error: "email must be a string",
        })
        .email("Must be a valid email")
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
})