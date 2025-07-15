function makeCounter(startfrom, increment) {
  let currentCount = startfrom || 0;
  return function () {
    currentCount += increment || 1;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(5, 2);
let counter2 = makeCounter(10, 3);

counter1();
counter1();

counter2();
counter2();

// a: yes this does stay independent because each time makeCounter is called it creates a new closure with its own currentCount variable
