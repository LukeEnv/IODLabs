let a = 2,
  b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

a + b < 10 ? console.log(result) : console.log("The result is greater than 10");

// += is the same as a = a + b
