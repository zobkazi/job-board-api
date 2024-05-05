// upazilas.js
import { Schema, model } from "mongoose";

const upazilaSchema = new Schema({
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
  },
  lat: {
    type: String,
  },
  lon: {
    type: String,
  },
});

const Upazila = model("Upazila", upazilaSchema);

export default Upazila;
