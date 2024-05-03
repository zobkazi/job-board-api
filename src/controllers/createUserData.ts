import { Request, Response } from 'express';
import CountryModel from '../models/CountryModel';

export const createCountryData = async (req: Request, res: Response): Promise<void> => {
    const { country } = req.body;

    try {
        // Check if the country already exists
        const existingCountry = await CountryModel.findOne({ country });
        if (existingCountry) {
            res.status(400).json({ error: 'Country already exists' });
            return;
        }

        // Create a new country document
        const newCountry = await CountryModel.create({ country });
        res.status(201).json(newCountry);
    } catch (error) {
        console.error('Error creating country data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
