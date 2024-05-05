// divisions.js
import { Schema, model } from "mongoose";

const divisionSchema = new Schema({
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

const Division = model("Division", divisionSchema);

export default Division;
