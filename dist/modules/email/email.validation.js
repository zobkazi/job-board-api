"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailSchema = void 0;
// src/modules/email/email.validation.ts
const zod_1 = require("zod");
exports.emailSchema = zod_1.z.object({
    recipient: zod_1.z.string({
        required_error: "recipient is required",
        invalid_type_error: "recipient must be a string",
    }),
    subject: zod_1.z.string({
        required_error: "subject is required",
        invalid_type_error: "subject must be a string",
    }),
    message: zod_1.z.string({
        required_error: "message is required",
        invalid_type_error: "message must be a string",
    }),
    sender: zod_1.z.string().optional(),
    source: zod_1.z.string().optional(),
});
//# sourceMappingURL=email.validation.js.map