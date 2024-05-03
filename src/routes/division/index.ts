import express from "express";
const division = express.Router();
import {
  createDivision,
  getDivision,
  deleteDivision,
  updateDivision,
  health,
  getDivisionById,
} from "@/controllers/bd-geocode/division";

division.get("/health", health);
division.get("/get-division-by-id/:id", getDivisionById);
division.post("/create-division", createDivision);
division.get("/get-division", getDivision);
division.delete("/delete-division", deleteDivision);
division.put("/update-division/:id", updateDivision);

export default division;
