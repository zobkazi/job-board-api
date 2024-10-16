# Job Board API

## Description

A job board API for managing job postings and applications. This API allows users to post job listings, apply for jobs, and manage job applications using Express and Mongoose.

## Features

- **Job Management**: Create, retrieve, update, and delete job listings.
- **Application Management**: Apply for jobs and manage applications.
- **Authentication**: Secure endpoints with JWT-based authentication.
- **Data Validation**: Ensure data integrity with Zod schema validation.

## Documentation

#### Postman Collection

![Postman Collection](https://www.postman.com/zobkaziapi/workspace/job-board-api-free/collection/21307415-2085d820-4d0e-4a83-9c6e-fd2fd62922e9)

#### OpenAPI Specification

![OpenAPI Specification](https://zobaidulkazi.notion.site/Job-Board-API-OpenAPI-Specification-7d3c9f8e6b0f4c9e9d6a5f7d6a5f7d6)

### System Design

![System Design](https://zobaidulkazi.notion.site/Job-Board-API-System-Design-7289bae724904048ab80ac61627ddd5a)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/zobkazi/job-board-api.git
cd job-board-api
yarn install
```

## Usage

### Development Mode

To start the development server with live reloading, run:

```bash
yarn dev
```

### Production Mode

To build the project and start the production server, run:

```bash
yarn build
yarn start
```

## API Documentation

### Endpoints

#### Create Job Listing

- **Endpoint**: `POST /jobs`
- **Description**: Create a new job listing.
- **Request Body**:
  ```json
  {
    "title": "Software Engineer",
    "description": "Develop and maintain software.",
    "location": "Remote"
  }
  ```
- **Response**:
  ```json
  {
    "id": "60c72b2f4f1a2c001f9b1e63",
    "title": "Software Engineer",
    "description": "Develop and maintain software.",
    "location": "Remote",
    "createdAt": "2024-08-18T12:00:00.000Z",
    "updatedAt": "2024-08-18T12:00:00.000Z"
  }
  ```

#### Get All Job Listings

- **Endpoint**: `GET /jobs`
- **Description**: Retrieve a list of all job listings.
- **Response**:
  ```json
  [
    {
      "id": "60c72b2f4f1a2c001f9b1e63",
      "title": "Software Engineer",
      "description": "Develop and maintain software.",
      "location": "Remote",
      "createdAt": "2024-08-18T12:00:00.000Z",
      "updatedAt": "2024-08-18T12:00:00.000Z"
    }
  ]
  ```

#### Get Job Listing by ID

- **Endpoint**: `GET /jobs/:id`
- **Description**: Retrieve details of a specific job listing.
- **Response**:
  ```json
  {
    "id": "60c72b2f4f1a2c001f9b1e63",
    "title": "Software Engineer",
    "description": "Develop and maintain software.",
    "location": "Remote",
    "createdAt": "2024-08-18T12:00:00.000Z",
    "updatedAt": "2024-08-18T12:00:00.000Z"
  }
  ```

#### Apply for Job

- **Endpoint**: `POST /applications`
- **Description**: Apply for a job listing.
- **Request Body**:
  ```json
  {
    "jobId": "60c72b2f4f1a2c001f9b1e63",
    "applicantName": "John Doe",
    "resume": "http://example.com/resume.pdf"
  }
  ```
- **Response**:
  ```json
  {
    "id": "60c72b2f4f1a2c001f9b1e64",
    "jobId": "60c72b2f4f1a2c001f9b1e63",
    "applicantName": "John Doe",
    "resume": "http://example.com/resume.pdf",
    "createdAt": "2024-08-18T12:00:00.000Z"
  }
  ```

## Configuration

#### Ensure you have a `.env` file in the root directory with the following environment variables:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_jwt_secret
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact Zobaidul Kazi at [zobkazi@gmail.com](mailto:zobkazi@gmail.com) or visit [GitHub Profile](https://github.com/zobkazi).



## Contributing Guidelines

### Summary

- **Project Title**: Provides a brief overview of the project.
- **Description**: Explains what the project does and its benefits.
- **Features**: Lists key features of the API.
- **Installation**: Instructions to install and set up the project.
- **Usage**: How to run the project in different modes.
- **API Documentation**: Details of the API endpoints.
- **Configuration**: Information on environment variables.
- **Contributing**: Guidelines for contributing to the project.
- **License**: Licensing details.
- **Contact**: Contact information for further inquiries.

## Thank You for Using Job Board API...