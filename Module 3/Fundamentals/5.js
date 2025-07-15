function getGreeting(name) {
  return "Hello " + name + "!";
}

const getGreeting2 = function (name) {
  return "Hello " + name + "!";
};

const getGreeting3 = (name) => {
  return "Hello " + name + "!";
};

// Testing the functions
console.log(getGreeting("Luke"));
console.log(getGreeting2("Luke"));
console.log(getGreeting3("Luke"));
