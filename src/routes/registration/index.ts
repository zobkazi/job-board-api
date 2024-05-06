import express from "express";
const registration = express.Router();
import { createRegistration, health } from "@/controllers/registration";

import uploadImg from "@/controllers/registration/uploadImg";

registration.post("/create-registration", createRegistration);
registration.get("/health", health);

registration.post("/upload-img", uploadImg);

export default registration;
