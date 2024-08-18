"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlog = exports.createBlog = void 0;
const createBlog = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "success",
    });
};
exports.createBlog = createBlog;
const getBlog = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "This is get blog route",
        data: req.body,
    });
};
exports.getBlog = getBlog;
//# sourceMappingURL=blog.controller.js.map