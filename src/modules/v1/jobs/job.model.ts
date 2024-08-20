import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for a Job document
interface IJob extends Document {
  salary: {
    min: number;
    max: number;
    unit: string;
    currency: string;
  };
  age_range: {
    min: number;
    max: number;
  };
  name: string;
  description?: string;
  company_name?: string;
  company_website?: string;
  company_country: string;
  budget: number;
  cities?: string[];
  skills?: string[];
  interests?: string[];
  language?: string[];
  status: "Draft" | "Published" | "Archived";
  created_at?: Date;
  updated_at?: Date;
  step: number;
  user_id: string;
  contract?: string;
  category: string[];
  experience?: string[];
  education?: string[];
  url?: string;
  title?: string;
  text_1?: string;
  text_2?: string;
  locations?: string[];
}

// Define the schema for the Job model
const JobSchema: Schema<IJob> = new Schema<IJob>({
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
  cities: [{ type: String }],
  skills: [{ type: String }],
  interests: [{ type: String }],
  language: [{ type: String }],
  status: {
    type: String,
    required: true,
    enum: ["Draft", "Published", "Archived"],
    default: "Draft",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  step: { type: Number, required: true, min: 0 },
  user_id: { type: String, required: true },
  contract: { type: String, required: true },
  category: [{ type: String, required: true }],
  experience: [{ type: String }],
  education: [{ type: String }],
  url: { type: String },
  title: { type: String },
  text_1: { type: String },
  text_2: { type: String },
  locations: [{ type: String }],
});

// Create the Job model from the schema
const Job: Model<IJob> = mongoose.model<IJob>("Job", JobSchema);

export default Job;
