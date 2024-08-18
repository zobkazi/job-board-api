"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./middleware"));
const routes_1 = __importDefault(require("./routes"));
const yamljs_1 = __importDefault(require("yamljs"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const errors_1 = require("./errors");
const notFoundError_1 = require("../errors/notFoundError");
const app = (0, express_1.default)();
const doc = yamljs_1.default.load(`${process.cwd()}/src/docs/swagger.yaml`);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(doc));
app.use(express_1.default.json());
app.use(middleware_1.default);
app.use("/api/v1", routes_1.default);
app.use("/api/v2", routes_1.default);
app.use(notFoundError_1.notFoundHandler);
app.use(errors_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map