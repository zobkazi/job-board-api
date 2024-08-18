"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidator = void 0;
const requestValidator = (schema) => {
    return async (req, _res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
            });
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.requestValidator = requestValidator;
//# sourceMappingURL=requestValidator.js.map