"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/modules/email/email.model.ts
const mongoose_1 = require("mongoose");
const emailSchema = new mongoose_1.Schema({
    recipient: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
    sender: {
        type: String
    },
    source: {
        type: String
    }
}, {
    timestamps: true
});
const Email = (0, mongoose_1.model)('Email', emailSchema);
exports.default = Email;
//# sourceMappingURL=email.model.js.map