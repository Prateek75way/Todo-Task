# Node.js API Project

This is a Node.js project that provides an API for managing users and tasks. It uses Express.js for the server, Mongoose for MongoDB interactions, and Passport for authentication. The API includes endpoints for user management, task management, and status updates.

## Features

- **User Authentication**: Login with email and password.
- **User Management**: Create, update, fetch, and delete users.
- **Task Management**: Create tasks, assign them to users, and update their status.
- **Swagger API Documentation**: API documentation available at `/api-docs`.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
- [License](#license)

## Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or pnpm (for package management)
- MongoDB (for database usage)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2. Install dependencies:

    If you are using `npm`:

    ```bash
    npm install
    ```

    Or if you are using `pnpm`:

    ```bash
    pnpm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory with the following keys:

    ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your-database
    JWT_SECRET=your-jwt-secret
    ```

4. Run the project:

    ```bash
    npm run dev
    ```

    Or with `pnpm`:

    ```bash
    pnpm run dev
    ```

## Scripts

- `npm run local`: Run the app with `nodemon` for local development.
- `npm run start`: Start the app using `ts-node`.
- `npm run dev`: Build the project and start the app in development mode.
- `npm run prod`: Build the project and start the app in production mode.
- `npm run build`: Compile TypeScript files to JavaScript.
- `npm run lint`: Lint the project using ESLint.
- `npm run lint:fix`: Fix linting issues automatically.
- `npm run format`: Format code using Prettier.
- `npm run format:check`: Check if the code is formatted according to Prettier.
- `npm run postinstall`: Install husky for git hooks.

## API Documentation

The API is documented using Swagger. To view the documentation:

1. Run the app.
2. Navigate to `http://localhost:3000/api-docs` in your browser.

### Example Endpoints

#### 1. `POST /users/login`
- **Summary**: Authenticate and log in a user.
- **Request Body**:

    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```

- **Response**:

    ```json
    {
      "token": "your-authentication-token"
    }
    ```

#### 2. `GET /users/{id}`
- **Summary**: Get a user by their ID.
- **Response**:

    ```json
    {
      "id": "12345",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "createdAt": "2023-01-01T12:00:00Z",
      "updatedAt": "2023-01-02T12:00:00Z"
    }
    ```

#### 3. `POST /tasks`
- **Summary**: Create a new task (Admin only).
- **Request Body**:

    ```json
    {
      "title": "Complete task",
      "description": "Description of the task",
      "status": "pending"
    }
    ```

- **Response**:

    ```json
    {
      "id": "task-123",
      "title": "Complete task",
      "description": "Description of the task",
      "status": "pending",
      "createdAt": "2023-01-01T12:00:00Z",
      "updatedAt": "2023-01-02T12:00:00Z"
    }
    ```

#### 4. `PATCH /tasks/update-status/{id}`
- **Summary**: Update the status of a task (User only).
- **Request Body**:

    ```json
    {
      "status": "completed"
    }
    ```

- **Response**:

    ```json
    {
      "id": "task-123",
      "title": "Complete task",
      "description": "Description of the task",
      "status": "completed",
      "createdAt": "2023-01-01T12:00:00Z",
      "updatedAt": "2023-01-02T12:00:00Z"
    }
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: Replace `"your-username/your-repository-name"` with the actual repository URL and update any placeholders in the environment variables and other sections.
