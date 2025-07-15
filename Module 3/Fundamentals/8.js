const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const melbourne = {
  name: "Melbourne",
  population: 5_078_000,
  state: "Victoria",
  founded: "30 August 1835",
  timezone: "Australia/Melbourne",
};

function cityinfo(city) {
  for (const key in city) {
    console.log(`${key}: ${city[key]}`);
  }
}

cityinfo(sydney);
cityinfo(melbourne);
