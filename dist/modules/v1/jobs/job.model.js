"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the schema for the Job model
const JobSchema = new mongoose_1.Schema({
    user_id: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    salary: {
        min: { type: Number, required: true, min: 0 },
        max: { type: Number, required: true, min: 0 },
        unit: { type: String, required: true },
        currency: { type: String, required: true },
    },
    age_range: {
        min: { type: Number, required: true, min: 0 },
        max: { type: Number, required: true, min: 0 },
    },
    name: { type: String, required: true },
    description: { type: String },
    company_name: { type: String },
    company_website: { type: String },
    company_country: { type: String, required: true },
    budget: { type: Number, required: true, min: 0 },
    cities: {
        type: [String],
    },
    skills: {
        type: [String],
    },
    interests: {
        type: [String],
    },
    language: {
        type: [String],
    },
    status: {
        type: String,
        required: true,
        enum: ["Draft", "Published", "Archived"],
        default: "Draft",
    },
    step: { type: Number, required: true, min: 0 },
    contract: { type: String, required: true },
    category: {
        type: [String],
    },
    experience: {
        type: [String],
    },
    education: {
        type: [String],
    },
    url: { type: String },
    text_1: { type: String },
    text_2: { type: String },
    locations: {
        type: [String],
    },
    affiliateUrl: { type: String },
    apply_url: {
        type: String
    },
    apply_text: {
        type: String,
    },
}, {
    timestamps: true,
});
// Create the Job model from the schema
const Job = (0, mongoose_1.model)("Job", JobSchema);
exports.default = Job;
//# sourceMappingURL=job.model.js.map