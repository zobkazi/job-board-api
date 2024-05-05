import express from "express";
const districts = express.Router();
import {
  saveDistrictsToJson,
  getAllDistricts,
  getDistrictById,
  getUpazilasByDistrictsId,
} from "@/controllers/bd-geocode/districts";

districts.get("/save", saveDistrictsToJson);

districts.get("/all", getAllDistricts);

districts.get("/:id", getDistrictById);

districts.get("/upazilas/:id", getUpazilasByDistrictsId);

export default districts;
