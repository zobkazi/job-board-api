"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("../routes");
const routes = (0, express_1.Router)();
routes.get("/health", (_req, res, next) => {
    try {
        res.status(200).json({
            status: 200,
            message: "success",
        });
    }
    catch (error) {
        next(error);
    }
});
// all Routes
routes_1.modulerRoutes.forEach(({ path, route }) => routes.use(path, route));
routes_1.modulerRoutes_v2.forEach(({ path, route }) => routes.use(path, route));
exports.default = routes;
//# sourceMappingURL=routes.js.map