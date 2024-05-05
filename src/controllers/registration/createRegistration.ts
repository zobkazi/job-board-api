import { Request, Response, NextFunction } from "express";
import { RegistrationTypes } from "@/types/RegistrationTypes";
import Registration from "@/models/Registration";

const createRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedBody = RegistrationTypes.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Invalid registration data",
        errors: parsedBody.error.errors,
      });
    }

    const existingRegistration = await Registration.findOne({
      email: parsedBody.data.email,
    });

    if (existingRegistration) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const registration = new Registration(parsedBody.data);

    await registration.save();

    console.log(registration);

    res.status(201).json(registration);
  } catch (error) {
    next(error);
  }
};

export default createRegistration;
