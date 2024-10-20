"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modulerRoutes_v2 = exports.modulerRoutes = void 0;
const news_routes_1 = __importDefault(require("../modules/v1/news/news.routes"));
const blog_routes_1 = __importDefault(require("../modules/v2/blogs/blog.routes"));
const apiKey_routes_1 = __importDefault(require("../modules/v2/apiKeys/apiKey.routes"));
const auth_routes_1 = __importDefault(require("../modules/auth/auth.routes"));
const user_routes_1 = __importDefault(require("../modules/user/user.routes"));
const job_routes_1 = __importDefault(require("../modules/v1/jobs/job.routes"));
const email_routes_1 = __importDefault(require("../modules/email/email.routes"));
exports.modulerRoutes = [
    {
        path: "/news",
        route: news_routes_1.default,
    },
    {
        path: "/auth",
        route: auth_routes_1.default,
    },
    {
        path: "/user",
        route: user_routes_1.default,
    },
    {
        path: "/email",
        route: email_routes_1.default,
    }
];
exports.modulerRoutes_v2 = [
    {
        path: "/blog",
        route: blog_routes_1.default,
    },
    {
        path: "/",
        route: apiKey_routes_1.default,
    },
    {
        path: "/job",
        route: job_routes_1.default,
    },
];
//# sourceMappingURL=index.js.map