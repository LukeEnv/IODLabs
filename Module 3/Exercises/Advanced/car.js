let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description(); //works
setTimeout(car.description, 200); //fails because it is trying to read the description method instead of calling it

setTimeout(() => car.description(), 200); //works because it is now calling the method

let newCar = car;
newCar.year = 2020;

// c: the year will use the new values because newCar is a reference to car

setTimeout(car.description.bind(car), 400); //works because it is binding the method to the car object

newCar.make = "Ferrari";
