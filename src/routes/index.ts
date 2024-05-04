import express from "express";
const router = express.Router();
import { saveUpazilaToJson } from "@/controllers/bd-geocode/upazila";

router.get("/save", saveUpazilaToJson);

export default router;
