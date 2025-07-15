let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = teamSports;
let dog2 = dog1;
let cat2 = cat1;

moreSports.push("Soccer");
moreSports.push("Basketball");

dog2 = "Rover";
cat2.name = "Mittens";

console.log(teamSports);
console.log(dog1);
console.log(cat1);

// Yes they do change. Because they are assigned to a pointer, which is basically just forwarding to the original variable,
// so when you apply changes, it will push that to the original reference.
