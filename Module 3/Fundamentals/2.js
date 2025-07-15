// Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

// addition is not giving the right answer because it is joining the two strings instead of adding them. We can fix this by converting the strings to numbers before adding them.

let three = "3";
let four = "4";
let thirty = "30";

let numThree = Number(three);
let numFour = Number(four);
let numThirty = Number(thirty);

//what is the value of the following expressions?
let addition = numThree + numFour; // "34" // now 7
let multiplication = numThree * numFour; // 12
let division = numThree / numFour; // 0.75
let subtraction = numThree - numFour; // -1

let lessThan1 = numThree < numFour;
let lessThan2 = numThirty < numFour;
