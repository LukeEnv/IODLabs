const express = require("express");
const router = express.Router();
const Calculator = require("../lib/calculator");
const Logger = require("../lib/logger");

// Add route
router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let id = Calculator.generateId();
  let sum = Calculator.add(number1, number2);
  Logger.log(id, sum);
  res.status(200).json({ id, result: sum });
});

// Subtract route
router.get("/subtract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let id = Calculator.generateId();
  let difference = Calculator.subtract(number1, number2);
  Logger.log(id, difference);
  res.status(200).json({ id, result: difference });
});

// Multiply route
router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let id = Calculator.generateId();
  let product = Calculator.multiply(number1, number2);
  Logger.log(id, product);
  res.status(200).json({ id, result: product });
});

// Divide route
router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let id = Calculator.generateId();
  try {
    let quotient = Calculator.divide(number1, number2);
    Logger.log(id, quotient);
    res.status(200).json({ id, result: quotient });
  } catch (err) {
    Logger.log(id, err.message);
    res.status(400).json({ id, error: err.message });
  }
});

module.exports = router;
