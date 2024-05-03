import express from "express";
const router = express.Router();
import { getAllCountries } from "../controllers/getAllCountries";
import { createCountry } from "../controllers/countryCreateController";
import { createCountryData } from "../controllers/createUserData";

router.get("/countries", getAllCountries);
router.post("/countries", createCountry);
router.post("/users", createCountryData);

export default router;