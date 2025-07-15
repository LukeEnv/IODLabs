function printFibonacci(limit) {
  let a = 1,
    b = 1;

  const interval = setInterval(() => {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
  }, 1000);

  if (limit) {
    setTimeout(() => {
      clearInterval(interval);
    }, (limit + 1) * 1000);
  }
}

function printFibonacciTimeouts(limit) {
  let a = 1,
    b = 1;

  let i = 0;

  const print = () => {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
    i++;
    if (limit && i < limit) {
      setTimeout(print, 1000);
    }
  };

  print();
}

//printFibonacci(10);
printFibonacciTimeouts(10);
