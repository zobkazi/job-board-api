"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = connectMongoDB;
const mongoose_1 = require("mongoose");
async function connectMongoDB(uri) {
    try {
        await (0, mongoose_1.connect)(uri).then((data) => console.log(`Database Connected to ${data?.connection.host}`));
    }
    catch (error) {
        throw new Error(error.message);
    }
}
//# sourceMappingURL=dbConnect.js.map