"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobValidationMessages = exports.JobSchema = void 0;
const zod_1 = require("zod");
// Zod schema definition
exports.JobSchema = zod_1.z.object({
    user_id: zod_1.z.string({ required_error: "User ID is required." }),
    title: zod_1.z.string({ required_error: "Job title is required." }),
    salary: zod_1.z.object({
        min: zod_1.z
            .number({ required_error: "Minimum salary is required." })
            .nonnegative("Salary must be non-negative."),
        max: zod_1.z
            .number({ required_error: "Maximum salary is required." })
            .nonnegative("Salary must be non-negative."),
        unit: zod_1.z.string({ required_error: "Salary unit is required." }),
        currency: zod_1.z.string({ required_error: "Currency is required." }),
    }),
    age_range: zod_1.z.object({
        min: zod_1.z
            .number({ required_error: "Minimum age is required." })
            .int("Age must be an integer."),
        max: zod_1.z
            .number({ required_error: "Maximum age is required." })
            .int("Age must be an integer."),
    }),
    name: zod_1.z.string({ required_error: "Job name is required." }),
    description: zod_1.z.string().optional(),
    company_name: zod_1.z.string().optional(),
    company_website: zod_1.z
        .string()
        .url("Company website must be a valid URL.")
        .optional(),
    company_country: zod_1.z.string({ required_error: "Company country is required." }),
    budget: zod_1.z
        .number({ required_error: "Budget is required." })
        .positive("Budget must be a positive number."),
    cities: zod_1.z.array(zod_1.z.string()).optional(),
    skills: zod_1.z.array(zod_1.z.string()).optional(),
    interests: zod_1.z.array(zod_1.z.string()).optional(),
    language: zod_1.z.array(zod_1.z.string()).optional(),
    status: zod_1.z.enum(["Draft", "Published", "Archived"], {
        required_error: "Status is required.",
    }),
    step: zod_1.z
        .number({ required_error: "Step is required." })
        .int("Step must be an integer."),
    contract: zod_1.z.string({ required_error: "Contract type is required." }),
    category: zod_1.z.array(zod_1.z.string()).optional(),
    experience: zod_1.z.array(zod_1.z.string()).optional(),
    education: zod_1.z.array(zod_1.z.string()).optional(),
    url: zod_1.z.string().url("URL must be valid.").optional(),
    text_1: zod_1.z.string().optional(),
    text_2: zod_1.z.string().optional(),
    locations: zod_1.z.array(zod_1.z.string()).optional(),
    apply_url: zod_1.z.string().url("Apply URL must be valid.").optional(),
    apply_text: zod_1.z.string().optional(),
    affiliateUrl: zod_1.z.string().optional(),
});
exports.JobValidationMessages = {
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
//# sourceMappingURL=job.validation.js.map