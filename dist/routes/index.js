"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modulerRoutes_v2 = exports.modulerRoutes = void 0;
const news_routes_1 = __importDefault(require("../modules/v1/news/news.routes"));
const blog_routes_1 = __importDefault(require("../modules/v2/blogs/blog.routes"));
("../modules/v2/blogs/blog.routes");
exports.modulerRoutes = [
    {
        path: "/news",
        route: news_routes_1.default,
    },
];
exports.modulerRoutes_v2 = [
    {
        path: "/blog",
        route: blog_routes_1.default,
    },
];
//# sourceMappingURL=index.js.map