const express = require("express");
const router = express.Router();

// functional add route performing addition on request parameters
router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

// functional subtract route
router.get("/subtract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = number1 - number2;
  console.log(difference);
  res.status(200);
  res.json({ result: difference });
});

// functional multiply route
router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let product = number1 * number2;
  console.log(product);
  res.status(200);
  res.json({ result: product });
});

// functional divide route
router.get("/divide", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  if (number2 === 0) {
    res.status(400);
    res.json({ error: "Cannot divide by zero" });
  } else {
    let quotient = number1 / number2;
    console.log(quotient);
    res.status(200);
    res.json({ result: quotient });
  }
});

module.exports = router;
