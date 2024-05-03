// controllers/countryController.ts

import { Request, Response } from 'express';
import CountryModel, { Country } from '../models/CountryModel';

export const getAllCountries = async (req: Request, res: Response): Promise<void> => {
  try {
    const countries: Country[] = await CountryModel.find();
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
