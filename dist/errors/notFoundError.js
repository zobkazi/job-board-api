"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const CustomError_1 = require("./CustomError");
const config_1 = require("../config");
const notFoundHandler = (req, _res, next) => {
    const error = new CustomError_1.CustomError(404, `Resource not found in ${config_1.baseUrl + req.url}`);
    next(error);
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=notFoundError.js.map