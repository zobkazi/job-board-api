import { z } from "zod";
export declare const JobSchema: z.ZodObject<{
    user_id: z.ZodString;
    title: z.ZodString;
    salary: z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
        unit: z.ZodString;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        min: number;
        max: number;
        unit: string;
        currency: string;
    }, {
        min: number;
        max: number;
        unit: string;
        currency: string;
    }>;
    age_range: z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        min: number;
        max: number;
    }, {
        min: number;
        max: number;
    }>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    company_name: z.ZodOptional<z.ZodString>;
    company_website: z.ZodOptional<z.ZodString>;
    company_country: z.ZodString;
    budget: z.ZodNumber;
    cities: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    interests: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    language: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    status: z.ZodEnum<["Draft", "Published", "Archived"]>;
    step: z.ZodNumber;
    contract: z.ZodString;
    category: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    experience: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    education: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    url: z.ZodOptional<z.ZodString>;
    text_1: z.ZodOptional<z.ZodString>;
    text_2: z.ZodOptional<z.ZodString>;
    locations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    apply_url: z.ZodOptional<z.ZodString>;
    apply_text: z.ZodOptional<z.ZodString>;
    affiliateUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
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
    company_country: string;
    budget: number;
    step: number;
    contract: string;
    description?: string | undefined;
    skills?: string[] | undefined;
    experience?: string[] | undefined;
    education?: string[] | undefined;
    company_name?: string | undefined;
    company_website?: string | undefined;
    cities?: string[] | undefined;
    interests?: string[] | undefined;
    language?: string[] | undefined;
    category?: string[] | undefined;
    url?: string | undefined;
    text_1?: string | undefined;
    text_2?: string | undefined;
    locations?: string[] | undefined;
    affiliateUrl?: string | undefined;
    apply_url?: string | undefined;
    apply_text?: string | undefined;
}, {
    name: string;
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
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
    company_country: string;
    budget: number;
    step: number;
    contract: string;
    description?: string | undefined;
    skills?: string[] | undefined;
    experience?: string[] | undefined;
    education?: string[] | undefined;
    company_name?: string | undefined;
    company_website?: string | undefined;
    cities?: string[] | undefined;
    interests?: string[] | undefined;
    language?: string[] | undefined;
    category?: string[] | undefined;
    url?: string | undefined;
    text_1?: string | undefined;
    text_2?: string | undefined;
    locations?: string[] | undefined;
    affiliateUrl?: string | undefined;
    apply_url?: string | undefined;
    apply_text?: string | undefined;
}>;
export type TJobValidationSchema = z.infer<typeof JobSchema>;
export declare const JobValidationMessages: {
    salary: {
        min: string;
        max: string;
        unit: string;
        currency: string;
    };
    age_range: {
        min: string;
        max: string;
    };
    name: string;
    company_country: string;
    budget: string;
    status: string;
    step: string;
    user_id: string;
    contract: string;
    category: string;
    company_website: string;
    url: string;
};
