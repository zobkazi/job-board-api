import { Schema, model } from "mongoose";

const districtsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
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

const District = model("District", districtsSchema);

export default District;
