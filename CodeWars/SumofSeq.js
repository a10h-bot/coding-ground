// //https://www.codewars.com/kata/586f6741c66d18c22800010a
// let sequenceSum = (begin, end, step) => {
//   if (begin > end) {
//     return 0;
//   }
//   return begin + sequenceSum(begin + step, end, step);
// };

// console.log(sequenceSum());

let array = [4, 8, 9, 12];
array.filter(x => x % 2 === 0 ? x : undefined).map(x => 2 * x).forEach(x => console.log(x));
let acc = array.reduce((acc, ele) => {
  acc += ele;
  return acc;
}, 0);

console.log(acc);

let array1 = [24, 18, 9, 3];
let x = array1.sort((a, b) => a - b)[0];
console.log(x);
let a = [8, 9, 10, 18];
console.log([8, 9, 10, 18][0]);