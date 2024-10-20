"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = require("ioredis");
const config_1 = require("../config");
const redisClient = () => {
    if (config_1.redisUrl) {
        console.log('Redis Connected');
        return config_1.redisUrl;
    }
    throw new Error('Could not connect to Redis');
};
exports.redis = new ioredis_1.Redis(redisClient());
//# sourceMappingURL=redisConnect.js.map