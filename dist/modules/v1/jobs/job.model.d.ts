import { Schema } from "mongoose";
declare const Job: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    skills: string[];
    experience: string[];
    education: string[];
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
    company_country: string;
    budget: number;
    cities: string[];
    interests: string[];
    language: string[];
    step: number;
    contract: string;
    category: string[];
    locations: string[];
    description?: string | null | undefined;
    salary?: {
        min: number;
        max: number;
        unit: string;
        currency: string;
    } | null | undefined;
    age_range?: {
        min: number;
        max: number;
    } | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    url?: string | null | undefined;
    text_1?: string | null | undefined;
    text_2?: string | null | undefined;
    affiliateUrl?: string | null | undefined;
    apply_url?: string | null | undefined;
    apply_text?: string | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    skills: string[];
    experience: string[];
    education: string[];
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
    company_country: string;
    budget: number;
    cities: string[];
    interests: string[];
    language: string[];
    step: number;
    contract: string;
    category: string[];
    locations: string[];
    description?: string | null | undefined;
    salary?: {
        min: number;
        max: number;
        unit: string;
        currency: string;
    } | null | undefined;
    age_range?: {
        min: number;
        max: number;
    } | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    url?: string | null | undefined;
    text_1?: string | null | undefined;
    text_2?: string | null | undefined;
    affiliateUrl?: string | null | undefined;
    apply_url?: string | null | undefined;
    apply_text?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    skills: string[];
    experience: string[];
    education: string[];
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
    company_country: string;
    budget: number;
    cities: string[];
    interests: string[];
    language: string[];
    step: number;
    contract: string;
    category: string[];
    locations: string[];
    description?: string | null | undefined;
    salary?: {
        min: number;
        max: number;
        unit: string;
        currency: string;
    } | null | undefined;
    age_range?: {
        min: number;
        max: number;
    } | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    url?: string | null | undefined;
    text_1?: string | null | undefined;
    text_2?: string | null | undefined;
    affiliateUrl?: string | null | undefined;
    apply_url?: string | null | undefined;
    apply_text?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    skills: string[];
    experience: string[];
    education: string[];
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
    company_country: string;
    budget: number;
    cities: string[];
    interests: string[];
    language: string[];
    step: number;
    contract: string;
    category: string[];
    locations: string[];
    description?: string | null | undefined;
    salary?: {
        min: number;
        max: number;
        unit: string;
        currency: string;
    } | null | undefined;
    age_range?: {
        min: number;
        max: number;
    } | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    url?: string | null | undefined;
    text_1?: string | null | undefined;
    text_2?: string | null | undefined;
    affiliateUrl?: string | null | undefined;
    apply_url?: string | null | undefined;
    apply_text?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    skills: string[];
    experience: string[];
    education: string[];
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
    company_country: string;
    budget: number;
    cities: string[];
    interests: string[];
    language: string[];
    step: number;
    contract: string;
    category: string[];
    locations: string[];
    description?: string | null | undefined;
    salary?: {
        min: number;
        max: number;
        unit: string;
        currency: string;
    } | null | undefined;
    age_range?: {
        min: number;
        max: number;
    } | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    url?: string | null | undefined;
    text_1?: string | null | undefined;
    text_2?: string | null | undefined;
    affiliateUrl?: string | null | undefined;
    apply_url?: string | null | undefined;
    apply_text?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    skills: string[];
    experience: string[];
    education: string[];
    status: "Draft" | "Published" | "Archived";
    user_id: string;
    title: string;
    company_country: string;
    budget: number;
    cities: string[];
    interests: string[];
    language: string[];
    step: number;
    contract: string;
    category: string[];
    locations: string[];
    description?: string | null | undefined;
    salary?: {
        min: number;
        max: number;
        unit: string;
        currency: string;
    } | null | undefined;
    age_range?: {
        min: number;
        max: number;
    } | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    url?: string | null | undefined;
    text_1?: string | null | undefined;
    text_2?: string | null | undefined;
    affiliateUrl?: string | null | undefined;
    apply_url?: string | null | undefined;
    apply_text?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default Job;
