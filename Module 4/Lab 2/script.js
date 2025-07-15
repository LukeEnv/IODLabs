let operation = null;

function setOperation(op) {
  operation = op;
  document.getElementById("result").innerText = `Selected operation: ${op}`;
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = "";

  if (isNaN(num1) || isNaN(num2) || !operation) {
    result = "Please enter valid numbers and choose an operation.";
  } else {
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation";
    }
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}

function reset() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "";
  operation = null;
}
