import { Request, Response } from "express";

export const createNews = (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "success",
  });
};

export const getNews = (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "This is get news route",
    news: req.body,
  });
};
