"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const apiKeySchema = new mongoose_1.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});
const ApiKey = (0, mongoose_1.model)("ApiKey", apiKeySchema);
exports.default = ApiKey;
//# sourceMappingURL=apiKey.model.js.map