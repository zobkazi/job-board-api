import { string, z } from "zod";

const JobTypes = z.object({
  uid: z.string(),
  workHours: z.string(),
  title: z.string(),
  specialCommitments: z.string(),
  skills: z.string(),
  salaryCurrency: z.string(),
  responsibilities: z.string(),
  qualifications: z.string(),
  occupationalCategory: z.string(),
  jobLocation: z.object({
    address: z.string(),
  }),
  jobBenefits: z.string(),
  industry: z.string(),
  incentiveCompensation: z.string(),
  experienceRequirements: z.string(),
  employmentType: z.string(),
  educationRequirements: z.string(),
  description: z.string(),
  datePosted: z.date().optional().default(new Date()),
  companyInfo: z.object({
    name: z.string(),
    logo: z.string(),
  }),
  companyUrl: z.string().optional(),
  companyDescription: z.string().optional(),
  companySize: z.string().optional(),
  companyLocation: z.string().optional(),
  baseSalary: z.object({
    currency: z.string(),
    amount: z.string(),
    unit: z.string(),
    period: z.string(),
    description: z.string(),
    display: z.string(),
  }),
  contactInfo: z.object({
    tel: z.string(),
    email: z.string(),
    address: z.object({
      city: z.string(),
      street: z.string(),
      houseNumber: z.string(),
    }),
  }),
});

export type Job = z.infer<typeof JobTypes>;

export default JobTypes;
