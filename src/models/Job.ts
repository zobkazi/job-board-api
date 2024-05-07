import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    workHours: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    specialCommitments: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    salaryCurrency: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    occupationalCategory: {
      type: String,
      required: true,
    },
    jobLocation: {
      address: {
        type: String,
        required: true,
      },
    },
    jobBenefits: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    incentiveCompensation: {
      type: String,
      required: true,
    },
    experienceRequirements: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      required: true,
    },
    educationRequirements: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    datePosted: {
      type: Date,
      default: Date.now,
    },
    companyInfo: {
      name: String,
      logo: String,
    },
    companyUrl: String,
    companyDescription: String,
    companySize: {
      type: String,
      required: true,
    },
    companyLocation: String,
    baseSalary: {
      currency: String,
      amount: String,
      unit: String,
      period: String,
      description: String,
      display: String,
    },
    contactInfo: {
      tel: String,
      email: String,
      address: {
        city: String,
        street: String,
        houseNumber: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.index({ uid: 1 });

const Job = model("Job", jobSchema);

export default Job;
