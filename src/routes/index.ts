import { Router } from "express";
import newsRoutes from "../modules/v1/news/news.routes";
import blogRoutes from "../modules/v2/blogs/blog.routes";
import apiKeyRoutes from "../modules/v2/apiKeys/apiKey.routes";
import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/user/user.routes";
import jobRoutes from "../modules/v1/jobs/job.routes";
import emailRoutes from "../modules/email/email.routes";

type IModulerRoutes = { path: string; route: Router }[];
type IModulerRoutes_v2 = { path: string; route: Router }[];

export const modulerRoutes: IModulerRoutes = [
  {
    path: "/news",
    route: newsRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/email",
    route: emailRoutes,
  }
];

export const modulerRoutes_v2: IModulerRoutes_v2 = [
  {
    path: "/blog",
    route: blogRoutes,
  },
  {
    path: "/",
    route: apiKeyRoutes,
  },
  {
    path: "/job",
    route: jobRoutes,
  },
];
