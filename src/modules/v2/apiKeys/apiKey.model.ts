import { Schema, model, Document } from "mongoose";

interface IApiKey extends Document {
  key: string;
  createdAt: Date;
  updatedAt: Date;
}

const apiKeySchema = new Schema<IApiKey>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ApiKey = model<IApiKey>("ApiKey", apiKeySchema);

export default ApiKey;
