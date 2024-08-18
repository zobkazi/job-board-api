import { Router } from "express";
const blogRoutes: Router = Router();

import { createBlog, getBlog } from "./blog.controller";

blogRoutes.post("/", createBlog);
blogRoutes.get("/", getBlog);

export default blogRoutes;
