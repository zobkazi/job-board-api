import { Schema } from "mongoose";
declare const Employer: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: string;
    name?: string | null | undefined;
    address?: string | null | undefined;
    phonenumber?: string | null | undefined;
    country?: string | null | undefined;
    city?: string | null | undefined;
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    company_country?: string | null | undefined;
    company_description?: string | null | undefined;
    company_industry?: string | null | undefined;
    company_size?: string | null | undefined;
    company_address?: string | null | undefined;
    company_city?: string | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: string;
    name?: string | null | undefined;
    address?: string | null | undefined;
    phonenumber?: string | null | undefined;
    country?: string | null | undefined;
    city?: string | null | undefined;
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    company_country?: string | null | undefined;
    company_description?: string | null | undefined;
    company_industry?: string | null | undefined;
    company_size?: string | null | undefined;
    company_address?: string | null | undefined;
    company_city?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: string;
    name?: string | null | undefined;
    address?: string | null | undefined;
    phonenumber?: string | null | undefined;
    country?: string | null | undefined;
    city?: string | null | undefined;
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    company_country?: string | null | undefined;
    company_description?: string | null | undefined;
    company_industry?: string | null | undefined;
    company_size?: string | null | undefined;
    company_address?: string | null | undefined;
    company_city?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: string;
    name?: string | null | undefined;
    address?: string | null | undefined;
    phonenumber?: string | null | undefined;
    country?: string | null | undefined;
    city?: string | null | undefined;
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    company_country?: string | null | undefined;
    company_description?: string | null | undefined;
    company_industry?: string | null | undefined;
    company_size?: string | null | undefined;
    company_address?: string | null | undefined;
    company_city?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: string;
    name?: string | null | undefined;
    address?: string | null | undefined;
    phonenumber?: string | null | undefined;
    country?: string | null | undefined;
    city?: string | null | undefined;
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    company_country?: string | null | undefined;
    company_description?: string | null | undefined;
    company_industry?: string | null | undefined;
    company_size?: string | null | undefined;
    company_address?: string | null | undefined;
    company_city?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user_id: string;
    name?: string | null | undefined;
    address?: string | null | undefined;
    phonenumber?: string | null | undefined;
    country?: string | null | undefined;
    city?: string | null | undefined;
    email?: string | null | undefined;
    company_name?: string | null | undefined;
    company_website?: string | null | undefined;
    company_country?: string | null | undefined;
    company_description?: string | null | undefined;
    company_industry?: string | null | undefined;
    company_size?: string | null | undefined;
    company_address?: string | null | undefined;
    company_city?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default Employer;
