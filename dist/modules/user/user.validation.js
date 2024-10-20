"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = void 0;
const zod_1 = require("zod");
exports.updateUserSchema = zod_1.z.object({
    username: zod_1.z.string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    }),
    role: zod_1.z.enum(["seeker", "employer", "admin"]).optional(),
    profile: zod_1.z.object({
        firstname: zod_1.z.string(),
        lastname: zod_1.z.string(),
        address: zod_1.z.string(),
        phonenumber: zod_1.z.string(),
        country: zod_1.z.string(),
        city: zod_1.z.string(),
        state: zod_1.z.string(),
        postalcode: zod_1.z.string(),
        bio: zod_1.z.string(),
        imageUrl: zod_1.z.string().optional(),
        gender: zod_1.z.enum(["male", "female", "other"]),
        dob: zod_1.z.string(),
        skills: zod_1.z.array(zod_1.z.string()),
        experience: zod_1.z.string(),
        education: zod_1.z.array(zod_1.z.string()),
        availability: zod_1.z.string(),
        availabilityTime: zod_1.z.string(),
        languages: zod_1.z.array(zod_1.z.string()).optional(),
        certifications: zod_1.z.array(zod_1.z.string()),
        awards: zod_1.z.array(zod_1.z.string()),
        projects: zod_1.z.array(zod_1.z.string()),
        website: zod_1.z.string(),
    })
});
//# sourceMappingURL=user.validation.js.map