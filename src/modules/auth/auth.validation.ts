// src/modules/auth/auth.validation.ts
import { z } from "zod";

export const siginUpSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
      invalid_type_error: "username must be a string",
    })
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be at most 50 characters"),
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email("Must be a valid email")
    .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "password must be a string",
    })
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
});

export type TSignUp = z.infer<typeof siginUpSchema>;

export const sigiInSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email("Must be a valid email")
    .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "password must be a string",
    })
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
  role: z
    .string({
      required_error: "role is required",
      invalid_type_error: "role must be a string",
    })
    .min(3, "role must be at least 3 characters")
    .max(50, "role must be at most 50 characters"),
  rememberMe: z.boolean().optional(),
});

export type TSignIn = z.infer<typeof sigiInSchema>;

export const accessTokenSchema = z.object({
  accessTocken: z.string({
    required_error: "accessTocken is required",
    invalid_type_error: "accessTocken must be a string",
  }),
});

export type TAccessToken = z.infer<typeof accessTokenSchema>;
