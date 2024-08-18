import { Request, Response } from "express";

export const createBlog = (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "success",
  });
};

export const getBlog = (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: "This is get blog route",
    data: req.body,
  });
};
