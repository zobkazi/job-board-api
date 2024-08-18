"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsRoutes = (0, express_1.Router)();
const news_controller_1 = require("./news.controller");
newsRoutes.post("/", news_controller_1.createNews);
newsRoutes.get("/", news_controller_1.getNews);
exports.default = newsRoutes;
//# sourceMappingURL=news.routes.js.map