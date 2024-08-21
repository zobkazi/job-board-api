import { z } from "zod";

// Zod schema definition
export const JobSchema = z.object({
  user_id: z.string({ required_error: "User ID is required." }),
  salary: z.object({
    min: z
      .number({ required_error: "Minimum salary is required." })
      .nonnegative("Salary must be non-negative."),
    max: z
      .number({ required_error: "Maximum salary is required." })
      .nonnegative("Salary must be non-negative."),
    unit: z.string({ required_error: "Salary unit is required." }),
    currency: z.string({ required_error: "Currency is required." }),
  }),
  age_range: z.object({
    min: z
      .number({ required_error: "Minimum age is required." })
      .int("Age must be an integer."),
    max: z
      .number({ required_error: "Maximum age is required." })
      .int("Age must be an integer."),
  }),
  name: z.string({ required_error: "Job name is required." }),
  description: z.string().optional(),
  company_name: z.string().optional(),
  company_website: z
    .string()
    .url("Company website must be a valid URL.")
    .optional(),
  company_country: z.string({ required_error: "Company country is required." }),
  budget: z
    .number({ required_error: "Budget is required." })
    .positive("Budget must be a positive number."),
  cities: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  interests: z.array(z.string()).optional(),
  language: z.array(z.string()).optional(),
  status: z.enum(["Draft", "Published", "Archived"], {
    required_error: "Status is required.",
  }),
  step: z
    .number({ required_error: "Step is required." })
    .int("Step must be an integer."),
  contract: z.string({ required_error: "Contract type is required." }),
  category: z.array(z.string()).optional(),
  experience: z.array(z.string()).optional(),
  education: z.array(z.string()).optional(),
  url: z.string().url("URL must be valid.").optional(),
  title: z.string().optional(),
  text_1: z.string().optional(),
  text_2: z.string().optional(),
  locations: z.array(z.string()).optional(),
  apply_url: z.string().url("Apply URL must be valid.").optional(),
  apply_text: z.string().optional(),
  published_at: z.date().optional(),
  archived_at: z.date().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  affiliateUrl: z.string().optional(),
});

export type TJobValidationSchema = z.infer<typeof JobSchema>;

export const JobValidationMessages = {
  salary: {
    min: "Minimum salary must be a non-negative number.",
    max: "Maximum salary must be a non-negative number.",
    unit: "Salary unit cannot be empty.",
    currency: "Currency cannot be empty.",
  },
  age_range: {
    min: "Minimum age must be an integer.",
    max: "Maximum age must be an integer.",
  },
  name: "Job name cannot be empty.",
  company_country: "Company country cannot be empty.",
  budget: "Budget must be a positive number.",
  status: "Status must be one of 'Draft', 'Published', or 'Archived'.",
  step: "Step must be an integer.",
  user_id: "User ID cannot be empty.",
  contract: "Contract type cannot be empty.",
  category: "Category cannot be empty.",
  company_website: "Company website must be a valid URL.",
  url: "URL must be valid.",
};
