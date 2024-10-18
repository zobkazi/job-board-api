// src/modules/auth/auth.validation.ts
// src/modules/auth/auth.validation.ts
import { z } from "zod";

// Profile schema
const profileSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  address: z.string().optional(),
  phonenumber: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalcode: z.string().optional(),
  bio: z.string().optional(),
  imageUrl: z.string().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  dob: z.string().optional(),
  skills: z.array(z.string()).optional(),
  experience: z.string().optional(),
  education: z.array(z.string()).optional(),
  certifications: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  availability: z.string().optional(),
  availabilityTime: z.string().optional(),
  awards: z.array(z.string()).optional(),
  projects: z.array(z.string()).optional(),
  website: z.string().optional(),
});

// SignUp schema
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
  
  profile: profileSchema.optional(), // Add the profile schema as an optional field
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

  rememberMe: z.boolean().optional(),
});

export type TSignIn = z.infer<typeof sigiInSchema>;
