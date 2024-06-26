import express from "express";
const division = express.Router();
import {
  createDivision,
  getAllDivision,
  deleteDivision,
  updateDivision,
  health,
  getDivisionById,
  saveDivisionsToJson,
  getDistrictsByDivionId,
} from "@/controllers/bd-geocode/division";

division.get("/health", health);
division.get("/get-division-by-id/:id", getDivisionById);
division.post("/create-division", createDivision);
division.get("/divisions", getAllDivision);
division.delete("/delete-division/:id", deleteDivision);
division.put("/update-division/:id", updateDivision);
division.get("/save-divisions-to-json", saveDivisionsToJson);

division.get("/get-districts-by-division-id/:id", getDistrictsByDivionId);

export default division;
