"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const handleDuplicateError = (error) => {
    const match = error.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errors = [
        {
            path: '',
            message: `${extractedMessage} is already exists`,
        },
    ];
    return errors;
};
exports.handleDuplicateError = handleDuplicateError;
//# sourceMappingURL=duplicateErrors.js.map