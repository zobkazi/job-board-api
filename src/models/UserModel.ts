// models/CountryModel.ts

import { Document, Schema, model } from 'mongoose';

export interface User extends Document {
  name: string;
  code: string;
}

const userModels = new Schema<User>({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
});

const userModel = model<User>('Country', userModels);

export default userModel;
