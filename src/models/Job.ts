import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    workHours: {
      type: String,
      required: true,
      trim: true,
      default: 0,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      max: 100,
      min: 5,
      trim: true,
      unique: true,
    },
    specialCommitments: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },

    skills: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },
    salaryCurrency: {
      type: String,
      required: true,
      trim: true,
      default: 0,
      unique: true,
    },
    responsibilities: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },
    qualifications: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },
    occupationalCategory: {
      type: String,
      required: true,
      trim: true,
    },
    jobLocation: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },
    jobBenefits: {
      type: String,
      required: true,
      trim: true,
      max: 100,
      min: 5,
      unique: true,
    },
    industry: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 40,
      min: 5,
    },
    incentiveCompensation: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    experienceRequirements: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    employmentType: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    educationRequirements: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },
    datePosted: {
      type: Date,
      default: Date.now,
    },
    companyInfo: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    companyUrl: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },
    companyDescription: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 100,
      min: 5,
    },
    companySize: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    companyLocation: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    baseSalary: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    contactInfo: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.index({ uid: 1 });

const Job = model("Job", jobSchema);

export default Job;
