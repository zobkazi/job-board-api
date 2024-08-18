"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogRoutes = (0, express_1.Router)();
const blog_controller_1 = require("./blog.controller");
blogRoutes.post("/", blog_controller_1.createBlog);
blogRoutes.get("/", blog_controller_1.getBlog);
exports.default = blogRoutes;
//# sourceMappingURL=blog.routes.js.map