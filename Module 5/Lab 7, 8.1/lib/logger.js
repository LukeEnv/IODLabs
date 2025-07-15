// Generic logger library
const Logger = {
  log: (callerId, result) => {
    const message = `Caller ID: ${callerId}, Result: ${JSON.stringify(result)}`;
    console.log(message);
  },
};

module.exports = Logger;
