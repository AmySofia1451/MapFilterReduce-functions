var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// THE BELOW 4 FUNCTIONS ALL DO THE SAME THING,
// THEY DOUBLE THE NUMBERS FROM THE ARRAY

// #1
// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// #2
// var newNumbers= [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(double);

// #3
// var newNumbers= [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// #4
// const newNumbers = numbers.map(function(x){
//   return x * 2;
// });

console.log(newNumbers);

var numbers = [3, 56, 2, 48, 5];
//Filter - Create a new array by keeping the items that return true.

// #1
// const newNumbers = numbers.filter(function (num) {
//   return num < 10
// });

// #2
// var newNumbers = [];
// numbers.forEach(function(num){
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });

console.log(newNumbers);

var numbers = [3, 56, 2, 48, 5];
//Reduce - Accumulate a value by doing something to each item in an array.

// #1
// var newNumbers = 0;
// numbers.forEach(function (currentNumber) {
//   newNumbers += currentNumber
// });

// #2
// var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// });

console.log(newNumbers);

var numbers = [3, 56, 2, 48, 5];
//Find - find the first item that matches from an array.

// const newNumbers = numbers.find(function (num) {
// return num > 10;
// });

console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

// const newNumbers = numbers.findIndex(function (num) {
//   return num > 10;
//   });

console.log(newNumbers);
