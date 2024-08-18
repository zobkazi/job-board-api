"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app/app"));
const config_1 = require("./config");
const dbConnect_1 = require("./db/dbConnect");
(async () => {
    try {
        if (config_1.mongoUrl) {
            console.log("database is connecting...");
            await (0, dbConnect_1.connectMongoDB)(config_1.mongoUrl);
            app_1.default.listen(config_1.port, () => {
                console.log(`server is running at ${config_1.port}`);
            });
        }
        else {
            console.error("MongoDB URL is not defined.");
        }
    }
    catch (error) {
        console.error("Failed to connect to the database:", error);
    }
})();
exports.default = app_1.default;
//# sourceMappingURL=index.js.map