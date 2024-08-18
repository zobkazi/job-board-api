"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNews = exports.createNews = void 0;
const createNews = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "success",
    });
};
exports.createNews = createNews;
const getNews = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "This is get news route",
        news: req.body,
    });
};
exports.getNews = getNews;
//# sourceMappingURL=news.controller.js.map