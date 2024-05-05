import express from "express";
const registration = express.Router();
import { createRegistration, health } from "@/controllers/registration";

registration.post("/create-registration", createRegistration);
registration.get("/health", health);

export default registration;
