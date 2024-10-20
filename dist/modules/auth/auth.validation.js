"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sigiInSchema = exports.siginUpSchema = void 0;
const zod_1 = require("zod");
const profileSchema = zod_1.z.object({
    firstname: zod_1.z.string().optional(),
    lastname: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    phonenumber: zod_1.z.string().optional(),
    country: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    postalcode: zod_1.z.string().optional(),
    bio: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    gender: zod_1.z.enum(["male", "female", "other"]).optional(),
    dob: zod_1.z.string().optional(),
    skills: zod_1.z.array(zod_1.z.string()).optional(),
    experience: zod_1.z.string().optional(),
    education: zod_1.z.array(zod_1.z.string()).optional(),
    certifications: zod_1.z.array(zod_1.z.string()).optional(),
    languages: zod_1.z.array(zod_1.z.string()).optional(),
    availability: zod_1.z.string().optional(),
    availabilityTime: zod_1.z.string().optional(),
    awards: zod_1.z.array(zod_1.z.string()).optional(),
    projects: zod_1.z.array(zod_1.z.string()).optional(),
    website: zod_1.z.string().optional(),
});
exports.siginUpSchema = zod_1.z.object({
    username: zod_1.z
        .string({
        required_error: "username is required",
        invalid_type_error: "username must be a string",
    })
        .min(3, "Username must be at least 3 characters")
        .max(50, "Username must be at most 50 characters"),
    email: zod_1.z
        .string({
        required_error: "email is required",
        invalid_type_error: "email must be a string",
    })
        .email("Must be a valid email")
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
    password: zod_1.z
        .string({
        required_error: "password is required",
        invalid_type_error: "password must be a string",
    })
        .min(6, "Password must be at least 6 characters")
        .max(50, "Password must be at most 50 characters"),
    profile: profileSchema.optional(),
});
exports.sigiInSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "email is required",
        invalid_type_error: "email must be a string",
    })
        .email("Must be a valid email")
        .regex(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
    password: zod_1.z
        .string({
        required_error: "password is required",
        invalid_type_error: "password must be a string",
    })
        .min(6, "Password must be at least 6 characters")
        .max(50, "Password must be at most 50 characters"),
    rememberMe: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=auth.validation.js.map