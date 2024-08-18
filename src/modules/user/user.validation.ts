import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email("Must be a valid email"),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be at most 50 characters"),
  })
  .required();

  