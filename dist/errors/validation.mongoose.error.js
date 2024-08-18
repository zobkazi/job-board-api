"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseCastError = exports.mongooseValidationError = void 0;
const mongooseValidationError = (error) => {
    const errors = Object.values(error.errors).map((val) => {
        return {
            path: val?.path,
            message: val?.message,
        };
    });
    return errors;
};
exports.mongooseValidationError = mongooseValidationError;
const mongooseCastError = (error) => {
    const errors = [
        {
            path: error.path,
            message: error.message,
        },
    ];
    return errors;
};
exports.mongooseCastError = mongooseCastError;
//# sourceMappingURL=validation.mongoose.error.js.map