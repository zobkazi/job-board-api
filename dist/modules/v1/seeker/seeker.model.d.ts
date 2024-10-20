import { Schema } from "mongoose";
declare const Seeker: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Approved" | "Rejected";
    user_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    job_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    resumeUrl?: string | null | undefined;
    coverLetter?: string | null | undefined;
    coverLetterUrl?: string | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Approved" | "Rejected";
    user_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    job_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    resumeUrl?: string | null | undefined;
    coverLetter?: string | null | undefined;
    coverLetterUrl?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Approved" | "Rejected";
    user_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    job_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    resumeUrl?: string | null | undefined;
    coverLetter?: string | null | undefined;
    coverLetterUrl?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Approved" | "Rejected";
    user_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    job_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    resumeUrl?: string | null | undefined;
    coverLetter?: string | null | undefined;
    coverLetterUrl?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Approved" | "Rejected";
    user_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    job_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    resumeUrl?: string | null | undefined;
    coverLetter?: string | null | undefined;
    coverLetterUrl?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Approved" | "Rejected";
    user_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    job_id?: {
        ref?: unknown;
        Schema?: import("mongoose").Types.ObjectId | null | undefined;
    } | null | undefined;
    resumeUrl?: string | null | undefined;
    coverLetter?: string | null | undefined;
    coverLetterUrl?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default Seeker;
