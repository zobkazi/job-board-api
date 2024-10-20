declare const _default: {
    Email: import("mongoose").Model<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message?: string | null | undefined;
        recipient?: string | null | undefined;
        subject?: string | null | undefined;
        sender?: string | null | undefined;
        source?: string | null | undefined;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message?: string | null | undefined;
        recipient?: string | null | undefined;
        subject?: string | null | undefined;
        sender?: string | null | undefined;
        source?: string | null | undefined;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message?: string | null | undefined;
        recipient?: string | null | undefined;
        subject?: string | null | undefined;
        sender?: string | null | undefined;
        source?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
        timestamps: true;
    }, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message?: string | null | undefined;
        recipient?: string | null | undefined;
        subject?: string | null | undefined;
        sender?: string | null | undefined;
        source?: string | null | undefined;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message?: string | null | undefined;
        recipient?: string | null | undefined;
        subject?: string | null | undefined;
        sender?: string | null | undefined;
        source?: string | null | undefined;
    }>> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        message?: string | null | undefined;
        recipient?: string | null | undefined;
        subject?: string | null | undefined;
        sender?: string | null | undefined;
        source?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
};
export default _default;
