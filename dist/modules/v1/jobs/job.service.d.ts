import { TJobValidationSchema } from "./job.validation";
import { Document } from "mongoose";
export declare const createJobService: (data: TJobValidationSchema & {
    user_id: string;
}) => Promise<Document>;
export declare const getJobsService: (page: number, limit: number, search: string) => Promise<{
    pagination: {
        totalJobs: number;
        totalPages: number;
        currentPage: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
        nextLink: string | null;
        prevLink: string | null;
    };
    jobs: (Document<unknown, {}, {
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
    })[];
}>;
export declare const getByIdJobService: (id: string) => Promise<Document<unknown, {}, {
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
}>;
export declare const updateJobService: (id: string, data: TJobValidationSchema) => Promise<Document<unknown, {}, {
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
}>;
export declare const deleteJobService: (id: string) => Promise<Document<unknown, {}, {
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
}>;
export declare const searchJobService: (query: string) => Promise<(Document<unknown, {}, {
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
})[]>;
export declare const getJobByUserService: (userId: string) => Promise<(Document<unknown, {}, {
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
})[]>;
