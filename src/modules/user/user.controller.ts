// src/modules/user/user.controller.ts
import { Request, Response, NextFunction } from "express";
import User from "./user.model";
import { getUserByIdService, updateUserService } from "./user.service";
import {updateUserSchema} from './user.validation'


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


// update.controller.ts
export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const updateData = updateUserSchema.parse(req.body);

    const updatedUser = await updateUserService(userId, updateData);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};


