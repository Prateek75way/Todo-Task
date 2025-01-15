import swaggerJSDoc from 'swagger-jsdoc';
import fs from 'fs/promises';  // Use fs.promises to work with async methods

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0', // OpenAPI version
  info: {
    title: 'My API', // Title of your API
    version: '1.0.0', // Version of the API
    description: 'A simple Express API with Swagger documentation', // Description of the API
  },
  servers: [
    {
      url: 'http://localhost:3000', // API server URL
      description: 'Local server',
    },
  ],
};

// Options for Swagger JSDoc
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API route files
};

// Generate Swagger specification using swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Write the Swagger JSON to a file asynchronously
async () =>await fs.writeFile('./swagger/options.json', JSON.stringify(swaggerSpec, null, 2));

console.log('Swagger JSON file has been saved as options.json');
