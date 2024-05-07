import { z } from "zod";

const JobTypes = z.object({
  uid: z.string().min(1).max(100),
  workHours: z.string(),
  title: z.string().min(5).max(100),
  specialCommitments: z.string().min(5).max(100),
  skills: z.string().min(5).max(100),
  salaryCurrency: z.string(),
  responsibilities: z.string().min(5).max(100),
  qualifications: z.string().min(5).max(100),
  occupationalCategory: z.string(),
  jobLocation: z.string().min(5).max(100),
  jobBenefits: z.string().min(5).max(100),
  industry: z.string().min(5).max(40),
  incentiveCompensation: z.string(),
  experienceRequirements: z.string(),
  employmentType: z.string(),
  educationRequirements: z.string(),
  description: z.string().min(5).max(100),
  datePosted: z.date().default(new Date()),
  companyInfo: z.string(),
  companyUrl: z.string().min(5).max(100),
  companyDescription: z.string().min(5).max(100),
  companySize: z.string(),
  companyLocation: z.string(),
  baseSalary: z.string(),
  contactInfo: z.string(),
});

export type Job = z.infer<typeof JobTypes>;

export default JobTypes;
