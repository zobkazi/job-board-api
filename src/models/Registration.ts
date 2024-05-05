import { Schema, model } from "mongoose";

const registrationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bn_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    nid: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
      default: "https://via.placeholder.com/150",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Registration = model("Registration", registrationSchema); // Changed model name to "Registration"

export default Registration;
