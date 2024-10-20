"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailRoutes = (0, express_1.Router)();
const email_controller_1 = require("./email.controller");
emailRoutes.get("/", email_controller_1.getAllEmails);
emailRoutes.post("/send", email_controller_1.sendEmail);
exports.default = emailRoutes;
//# sourceMappingURL=email.routes.js.map