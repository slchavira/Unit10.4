// Given this function: 
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// Refactor it to use the rest operator & an arrow function:
const filterOutOdds = (...args) => args.filter(value => value % 2 === 0);