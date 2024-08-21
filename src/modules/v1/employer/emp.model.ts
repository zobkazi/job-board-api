import { Schema, model } from "mongoose";

const empSchema = new Schema(
  {
    user_id: { type: String, required: true },
    name: { type: String },
    email: { type: String },
    address: { type: String },
    phonenumber: { type: String },
    country: { type: String },
    city: { type: String },
    company_name: { type: String },
    company_website: { type: String },
    company_country: { type: String },
    company_description: { type: String },
    company_industry: { type: String },
    company_size: { type: String },
    company_address: { type: String },
    company_city: { type: String },
  },
  {
    timestamps: true,
  }
);

const Employer = model("Employer", empSchema);

export default Employer;
