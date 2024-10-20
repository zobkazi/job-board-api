"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const seekerSchema = new mongoose_1.Schema({
    user_id: {
        Schema: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    job_id: {
        Schema: mongoose_1.Schema.Types.ObjectId,
        ref: "Job",
    },
    resumeUrl: {
        type: String,
    },
    coverLetter: {
        type: String,
    },
    coverLetterUrl: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
}, {
    timestamps: true,
});
const Seeker = (0, mongoose_1.model)("Seeker", seekerSchema);
exports.default = Seeker;
//# sourceMappingURL=seeker.model.js.map