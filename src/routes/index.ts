import { Router } from "express";
import newsRoutes from "../modules/v1/news/news.routes";
import blogRoutes from "../modules/v2/blogs/blog.routes";
("../modules/v2/blogs/blog.routes");

type IModulerRoutes = { path: string; route: Router }[];
type IModulerRoutes_v2 = { path: string; route: Router }[];

export const modulerRoutes: IModulerRoutes = [
  {
    path: "/news",
    route: newsRoutes,
  },
];

export const modulerRoutes_v2: IModulerRoutes_v2 = [
  {
    path: "/blog",
    route: blogRoutes,
  },
];
