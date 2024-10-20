"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = exports.getAllEmails = void 0;
const email_model_1 = __importDefault(require("./email.model"));
const email_validation_1 = require("./email.validation");
const config_1 = require("../../config");
const getAllEmails = async (req, res, next) => {
    try {
        const emails = await email_model_1.default.find();
        res.status(200).json(emails);
    }
    catch (error) {
        next(error);
    }
};
exports.getAllEmails = getAllEmails;
const sendEmail = async (req, res, next) => {
    // validate the request body
    const parsedBody = email_validation_1.emailSchema.safeParse(req.body);
    if (!parsedBody.success) {
        return res.status(400).json({ error: parsedBody.error.errors });
    }
    // create mail option
    const { sender, recipient, subject, message, source } = parsedBody.data;
    const from = sender || config_1.defaultSender;
    const emailOption = {
        from,
        to: recipient,
        subject,
        text: message,
    };
    // send the email
    const { rejected } = await config_1.transporter.sendMail(emailOption);
    if (rejected.length) {
        console.log("Email rejected", rejected);
        return res.status(500).json({ message: "Failed" });
    }
    // save the email
    const email = await email_model_1.default.create({
        data: {
            sender: from,
            recipient,
            subject,
            message,
            source,
        },
    });
    res.status(201).json({
        success: true,
        message: "Email sent successfully",
        data: email,
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.controller.js.map