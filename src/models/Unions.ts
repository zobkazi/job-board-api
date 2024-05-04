import { Schema, model } from "mongoose";

const unionsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bn_name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    upazila_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Union = model("Unions", unionsSchema);

export default Union;
