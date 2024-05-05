// districts.js
import { Schema, model } from "mongoose";

const districtSchema = new Schema({
  division_id: {
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

const District = model("District", districtSchema);

export default District;
