// src/modules/user/user.controller.ts
import { Request, Response, NextFunction } from "express";
import User from "./user.model";
import { getUserByIdService } from "./user.service";


export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.user?.id).select("-password"); // Access user ID from req.user
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Update user and exclude sensitive information
    const user = await User.findByIdAndUpdate(req.user?._id, req.body, {
      new: true,
      runValidators: true,
      select: "-password",
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};




// get_by_id.controller.ts

export const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getUserByIdService(req.params.id);

    if (!user) {
      throw new Error("User not found. Please try again.");
    }
    res.status(200).json({
      success: true,
      data: user,
    })
  } catch (error) {
    next(error);
  }
}


