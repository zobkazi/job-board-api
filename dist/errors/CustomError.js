"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
/* eslint-disable no-unused-vars */
class CustomError extends Error {
    constructor(status = 500, message, stack = '') {
        super(message);
        this.status = status;
        this.message = message;
        this.stack = stack;
        if (!stack) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=CustomError.js.map