"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const zodError_1 = require("../errors/zodError");
const CustomError_1 = require("../errors/CustomError");
const config_1 = require("../config");
const validation_mongoose_error_1 = require("../errors/validation.mongoose.error");
const duplicateErrors_1 = require("../errors/duplicateErrors");
const errorHandler = (error, req, res, _next) => {
    let status = 500;
    let message = 'Something went wrong';
    const success = false;
    let stackTrace = config_1.NODE_ENV === 'development' ? error.stack : null;
    let errors = [
        {
            path: req.url,
            message: 'Something went wrong',
        },
    ];
    if (error instanceof Error) {
        message = error.message;
        errors = [
            {
                path: '',
                message: error?.message,
            },
        ];
    }
    if (error instanceof CustomError_1.CustomError) {
        status = error.status;
        message = error.message;
        errors = [
            {
                path: '',
                message: error?.message,
            },
        ];
    }
    if (error.name === 'CastError') {
        status = 400;
        message = `Invalid ID`;
        const simplified = (0, validation_mongoose_error_1.mongooseCastError)(error);
        errors = simplified;
    }
    if (error instanceof zod_1.ZodError) {
        status = 400;
        message = `Validation Error`;
        stackTrace = error.stack
            ? { ...stackTrace, stack: error.stack }
            : stackTrace;
        const simplified = (0, zodError_1.handleZodError)(error);
        errors = simplified;
    }
    if (error.name === 'ValidationError') {
        status = 400;
        message = `Validation Error`;
        const simplified = (0, validation_mongoose_error_1.mongooseValidationError)(error);
        errors = simplified;
    }
    if (error.code === 11000) {
        status = 400;
        message = `Data Duplication Error`;
        const simplified = (0, duplicateErrors_1.handleDuplicateError)(error);
        errors = simplified;
    }
    return res
        .status(status)
        .json({ status, success, message, errors, error, stackTrace });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errors.js.map