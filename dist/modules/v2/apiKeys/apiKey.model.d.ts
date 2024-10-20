import { Document } from "mongoose";
interface IApiKey extends Document {
    key: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const ApiKey: import("mongoose").Model<IApiKey, {}, {}, {}, Document<unknown, {}, IApiKey> & IApiKey & Required<{
    _id: unknown;
}>, any>;
export default ApiKey;
