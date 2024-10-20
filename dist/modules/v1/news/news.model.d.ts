import { Schema } from 'mongoose';
declare const News: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    user_id: string;
    title: string;
    image: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    user_id: string;
    title: string;
    image: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    user_id: string;
    title: string;
    image: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    user_id: string;
    title: string;
    image: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    user_id: string;
    title: string;
    image: string;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    user_id: string;
    title: string;
    image: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default News;
