import mongoose from 'mongoose';
import { TErrors } from '../interfaces/error.interface';
export declare const mongooseValidationError: (error: mongoose.Error.ValidationError) => TErrors;
export declare const mongooseCastError: (error: mongoose.Error.CastError) => TErrors;
