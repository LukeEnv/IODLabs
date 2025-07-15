# Lab 2 Calculator App

This project is a simple server-side calculator application built with Express.js. It provides a basic structure for adding more functionality in the future.

## Project Structure

```
lab2-calculator-app
├── routes
│   └── calculatorRoutes.js  # Defines routes for the calculator
├── index.js                 # Entry point of the application
├── package.json             # Configuration file for npm
└── README.md                # Documentation for the project
```

## Getting Started

To set up and run the application, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd lab2-calculator-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the calculator:**
   Open your browser and navigate to `http://localhost:3000/calculator/add` to test the add route.

## Routes

- **GET /calculator/add**: This route currently responds with the text 'Add'. It is the starting point for building the calculator functionality.

## Future Enhancements

- Implement additional routes for subtraction, multiplication, and division.
- Add input validation and error handling.
- Create a front-end interface to interact with the calculator.