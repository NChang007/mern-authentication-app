# MERN Authentication App

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application focused on secure user authentication. The app provides a robust and secure authentication system, allowing users to register, log in, and access protected resources and routes.

## Features

- User registration: Users can create a new account by providing a unique email and password.
- User login: Existing users can log in with their credentials.
- Password hashing: User passwords are securely hashed using bcrypt before storing them in the database.
- JSON Web Tokens (JWT): JWTs are used for user authentication and authorization. Upon successful login, a JWT is generated and stored as an HTTP cookie on the client-side for subsequent requests.
- Protected routes: Certain routes and resources are protected and can only be accessed by authenticated users.
- Logout: Users can log out of their accounts, invalidating their JWT and requiring re-authentication.
- Error handling: The app has custom middleware that handles and displays appropriate error messages for various scenarios, such as incorrect login credentials or duplicate usernames during registration.
- Responsive design: The application is designed to be mobile-friendly and responsive across different screen sizes.
- CRUD functionality: The app supports Create, Read, Update, and Delete operations for managing data.

## Technologies Used

- MongoDB: A NoSQL database used to store user information and application data.
- Express.js: A web application framework for building the backend server.
- React.js: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime used for server-side scripting.
- bcrypt: A library for hashing user passwords.
- JSON Web Tokens (JWT): A compact, URL-safe means of representing claims between two parties.
- React-Bootstrap: A popular CSS framework for building responsive web applications.
- Redux Toolkit: A library for managing the application state and data flow in React applications.

## Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.
- A MongoDB database connection string should be available.

## Installation

1. Clone the repository: https://github.com/NChang007/mern-authentication-app
2. Navigate to the project directory: cd mern-authentication-app
3. Install the server dependencies: npm install
4. Navigate to the client directory: cd frontend
5. Install the client dependencies: npm install
6. Go back to the project root directory: cd..
7. Create a `.env` file in the project root directory

## Usage

Open your web browser and navigate to http://localhost:3000 to access the application.
Use the registration form to create a new user account.
Log in with your newly created account or an existing account.
After successful login, you will be redirected to the home page, where you can access protected resources.
Click on the logout button to log out of your account.

## License
This project is licensed under the MIT License.

## Acknowledgements
- Most of this code was part of a tutorial by Traversy Media --> this is the link to the specific video https://www.youtube.com/watch?v=R4AhvYORZRY and this is the link to his youtube https://www.youtube.com/@TraversyMedia 
