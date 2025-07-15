// guessed // actual

"" + 1 + 0; // "10" // "10"
"" - 1 + 0; // -1 // -1
true + false; // 1 // 1 // because false is 0 and true is 1, so 1 + 0 = 1
!true; // false // false // because ! is the opposite of the value, so !true = false
6 / "3"; // 2 // 2
"2" * "3"; // 6 // 6
4 + 5 + "px"; // "9px" // "9px"
"$" + 4 + 5; // "$45" // "$45"
"4" - 2; // 2 // 2
"4px" - 2; // error // Nan
" -9 " + 5; // " -9 5" // " -9 5"
" -9 " - 5; // error // "-14"
null + 1; // 1 // 1 // because null & false are 0 therefore 0 + 1 = 1
undefined + 1; // error // Nan
undefined == null; // true // true undefined and null are both 0 therefore they are equal, but not identical type
undefined === null; // false // false because they are not identical type even though they hold the same value
" \t \n" - 2; // -2 // -2 // because the string is converted to 0 if it does not contain valid number conversion

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);
