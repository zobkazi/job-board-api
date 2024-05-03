import { Schema, model } from "mongoose";

const divisionsSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const Division = model("Division", divisionsSchema);

export default Division;
