// controllers/countryCreateController.ts

import { Request, Response } from 'express';
import CountryModel, { Country } from '../models/CountryModel';

import countriesData from './countriesData';


export const createCountry = async (req: Request, res: Response): Promise<void> => {
  try {
   
      console.log(countriesData)

    // create new country

    countriesData.forEach(async (country) => {
      const newCountry = new CountryModel({
        name: country.name,
        code: country.code,
      });
      await newCountry.save();
      console.log('Country created:', newCountry);
    })

    res.status(201).json({ message: 'Countries created successfully' });
      
  } catch (error) {
    console.error('Error creating country:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
