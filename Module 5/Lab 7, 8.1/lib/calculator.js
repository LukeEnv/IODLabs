// Calculator library for basic operations and random ID generation
const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  },
  generateId: () => Math.floor(Math.random() * 1e9), // random 9-digit ID
};

module.exports = Calculator;
