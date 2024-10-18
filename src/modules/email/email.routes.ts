// modules/auth/auth.routes.ts
import { Router } from "express";
const emailRoutes = Router();

import {getAllEmails, sendEmail} from './email.controller'

emailRoutes.get("/", getAllEmails);
emailRoutes.post("/send", sendEmail);

export default emailRoutes;
