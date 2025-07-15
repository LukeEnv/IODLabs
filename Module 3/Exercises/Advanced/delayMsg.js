const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
const fifth = setTimeout(delayMsg, 12000, "#5: Delayed by 12s");

setTimeout(() => {
  clearTimeout(fifth);
}, 5000);

// a: #4, #3, #2, #1, because the delayMsg function is called immediately and the setTimeout function is called after the delay
