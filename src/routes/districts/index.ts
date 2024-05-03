import express from "express";
const districts = express.Router();
import {
  saveDistrictsToJson,
  getAllDistricts,
  getDistrictById,
} from "@/controllers/bd-geocode/districts";

districts.get("/save", saveDistrictsToJson);

districts.get("/all", getAllDistricts);

districts.get("/:id", getDistrictById);

export default districts;
