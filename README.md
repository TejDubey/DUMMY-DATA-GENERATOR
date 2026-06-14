# Dummy Data Generator

A simple web application built using Express.js, MongoDB, and Mongoose that generates random employee records and stores them in a MongoDB database.

## Features

- Generate a user-defined number of employee records
- Store generated records in MongoDB
- Delete previous records before generating new data
- View generated records in JSON format at /employees
- Input validation for record count
- Success notification after data generation
- Simple and interactive EJS frontend

## Employee Data Generated

Each generated employee contains:

- Name
- Salary
- Programming Language
- City
- Manager Status (true/false)

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- HTML
- CSS
- JavaScript

## Project Structure

```text
.
├── models/
│   └── dummy.js
├── views/
│   └── index.ejs
├── main.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Installation

Clone the repository:

```bash
git clone https://github.com/TejDubey/dummy-data-generator.git
```

Move into the project directory:

```bash
cd dummy-data-generator
```

Install dependencies:

```bash
npm install
```

## Run the Application

Start MongoDB locally and run:

```bash
node main.js
```

Open your browser and visit:

```text
http://localhost:3000
```

## API Endpoints

### Generate Dummy Data

```http
GET /ddg?n=<number>
```

Example:

```http
GET /ddg?n=100
```

Generates 100 employee records and stores them in MongoDB.

### View Generated Records

```http
GET /employees
```

Returns all employee records currently stored in MongoDB.

Example:

```http
http://localhost:3000/employees
```

## Validation Rules

- Number of records must be greater than 0
- Maximum allowed records: 5000
- Invalid input defaults to 10 records

## Future Improvements

- Export data as CSV
- Export data as JSON file
- Search employees by name
- Filter employees by city or language
- MongoDB Atlas integration
- Improved UI styling

## Author

Tej Dubey
