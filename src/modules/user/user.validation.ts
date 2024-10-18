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
    imageUrl: z.string().optional(),
    gender: z.enum(["male", "female", "other"]),
    dob: z.string(),
    skills: z.array(z.string()),
    experience: z.string(),
    education: z.array(z.string()),
    availability: z.string(),
    availabilityTime: z.string(),
    languages: z.array(z.string()).optional(),
    certifications: z.array(z.string()),
    awards: z.array(z.string()),
    projects: z.array(z.string()),
    website: z.string(),
  })
});
  