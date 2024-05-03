import { Document, Schema, model } from 'mongoose';

export interface Country extends Document {
  country: string;
}

const countrySchema = new Schema<Country>({
  country: { type: String, required: true, unique: true },
});

const CountryModel = model<Country>('Country', countrySchema);

export default CountryModel;
