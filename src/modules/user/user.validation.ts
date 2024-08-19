import { z } from "zod";

export const updateUserSchema = z.object({
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  }),
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
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
    .min(6, "Password must be at least 6 characters"),
  role: z.enum(["seeker", "employer", "admin"]).optional(),
  profile: z.object({
    firstname: z.string(),
    lastname: z.string(),
    address: z.string(),
    phonenumber: z.string(),
    country: z.string(),
    city: z.string(),
    state: z.string(),
    postalcode: z.string(),
    bio: z.string(),
    ImageUrl: z.string(),
    gender: z.enum(["male", "female", "other"]),
    dob: z.date(),
    skills: z.array(z.string()),
    experience: z.number(),
    education: z.array(z.string()),
    availability: z.string(),
    availabilityTime: z.string(),
    language: z.array(z.string()),
    certifications: z.array(z.string()),
    awards: z.array(z.string()),
    projects: z.array(z.string()),
    website: z.string(),
  })
});
  