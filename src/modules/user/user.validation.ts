import { z } from "zod";

export const updateUserSchema = z.object({
  username: z.string({
    required_error: "Username is required",
    invalid_type_error: "Username must be a string",
  }),
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
  