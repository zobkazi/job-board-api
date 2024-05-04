import { Schema, model, Types } from "mongoose";

const upazilaSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  district_id: {
    type: String,
    required: true,
  },
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
});

const Upazila = model("Upazila", upazilaSchema);

export default Upazila;
