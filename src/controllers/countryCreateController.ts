// controllers/countryCreateController.ts

import { Request, Response } from 'express';
import CountryModel, { Country } from '../models/CountryModel';

import countriesData from './countriesData';


export const createCountry = async (req: Request, res: Response): Promise<void> => {
  try {

    // create new country

    countriesData.forEach(async (country) => {
      const newCountry = new CountryModel({
        name: country.name,
        code: country.code,
      });


      // check if country already exists
      const existingCountry = await CountryModel.findOne({ code: newCountry });
      if (existingCountry) {
        console.log('Country already exists:', existingCountry);
        return;
      }

      

      // save country
      await newCountry.save();
      res.status(201).json({
        message: 'Country created successfully',
        newCountry,
      });
      console.log('Country created:', newCountry);
    })

    res.status(201).json({ message: 'Countries created successfully' });
      
  } catch (error) {
    console.error('Error creating country:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
