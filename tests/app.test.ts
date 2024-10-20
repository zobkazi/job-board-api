import request from 'supertest';
import app from '../src/app/app'; // import your Express app

describe('Express App Test Suite', () => {
  // Test for Swagger documentation route
  it('should serve Swagger documentation on /docs', async () => {
    const response = await request(app).get('/docs');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Swagger UI'); // Checks if Swagger UI is served
  });

  // Test for an API route
  it('should return 404 for a non-existing route', async () => {
    const response = await request(app).get('/api/v1/non-existing-route');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Route not found' }); // Assuming your `notFoundHandler` returns this message
  });

  // Test for a valid route (Replace `/api/v1` with any valid route you have)
  it('should return a 200 status code for a valid route', async () => {
    const response = await request(app).get('/api/v1'); // Replace with an actual route that exists in your routes
    expect(response.status).toBe(200);
    // Optionally, test for the response body or text
    expect(response.body).toHaveProperty('data'); // Assuming your route returns some data
  });

  // Test for JSON parsing middleware
  it('should parse JSON request body correctly', async () => {
    const postData = { name: 'Test', value: 123 };
    const response = await request(app)
      .post('/api/v1/your-endpoint') // Replace with an actual POST route
      .send(postData)
      .set('Content-Type', 'application/json');
    
    expect(response.status).toBe(201); // Replace with your expected status code
    expect(response.body).toEqual(expect.objectContaining(postData)); // Assuming the response contains the posted data
  });
});
