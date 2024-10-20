import request from 'supertest';
import mongoose from 'mongoose';

// Mock MongoDB connection
jest.mock('mongoose', () => ({
  connect: jest.fn().mockResolvedValue({
    connection: {
      host: 'localhost',
    },
  }),
}));

describe('Test Express Server and MongoDB Connection', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/test-db');
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should connect to MongoDB', async () => {
    expect(mongoose.connect).toHaveBeenCalledWith('mongodb://localhost:27017/test-db');
  });
});
