"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /src/modules/email/emailReceiver.ts
const amqplib_1 = __importDefault(require("amqplib"));
const config_1 = require("../config");
const email_model_1 = __importDefault(require("../modules/email/email.model"));
const receiveFromQueue = async (queue, callback) => {
    const connection = await amqplib_1.default.connect(config_1.QUEUE_URL);
    const channel = await connection.createChannel();
    const exchange = "order";
    await channel.assertExchange(exchange, "direct", { durable: true });
    const q = await channel.assertQueue(queue, { durable: true });
    await channel.bindQueue(q.queue, exchange, queue);
    channel.consume(q.queue, (msg) => {
        if (msg) {
            callback(msg.content.toString());
        }
    }, { noAck: true });
};
receiveFromQueue("send-email", async (msg) => {
    const parsedBody = JSON.parse(msg);
    const { userEmail, grandTotal, id } = parsedBody;
    const from = config_1.defaultSender;
    const subject = "Order Confirmation";
    const body = `Thank you for your order! Your order id is ${id}. Your total is $${grandTotal}.`;
    const emailOption = {
        from,
        to: userEmail,
        subject,
        text: body,
    };
    // Send the email
    const { rejected } = await config_1.transporter.sendMail(emailOption);
    if (rejected.length) {
        console.log("Email rejected", rejected);
    }
    await email_model_1.default.create({
        data: {
            sender: from,
            recipient: userEmail,
            subject,
            body,
            source: "OrderConfirmation",
        },
    });
    console.log("Email Send");
});
// export default receiveFromQueue;
//# sourceMappingURL=emailReceiver.js.map