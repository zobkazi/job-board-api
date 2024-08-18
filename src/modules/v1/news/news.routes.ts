import { Router } from "express";
const newsRoutes: Router = Router();

import { createNews, getNews } from "./news.controller";

newsRoutes.post("/", createNews);
newsRoutes.get("/", getNews);

export default newsRoutes;
