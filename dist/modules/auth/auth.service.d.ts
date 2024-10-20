import { TSignIn, TSignUp } from "./auth.validation";
import { Document } from "mongoose";
export declare const siginUpService: (data: TSignUp) => Promise<Document>;
export declare const signinService: (data: TSignIn) => Promise<string>;
export declare const forgotPasswordService: (email: string) => Promise<"Code sent to your email" | "Reset code sent to your email.">;
export declare const validateResetCodeService: (email: string, code: string) => Promise<boolean>;
export declare const changePasswordService: (email: string, newPassword: string) => Promise<string>;
