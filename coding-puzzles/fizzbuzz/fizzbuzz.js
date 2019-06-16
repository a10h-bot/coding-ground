// // --- Directions
// // Write a program that console logs the numbers
// // from 1 to n. But for multiples of three print
// // “fizz” instead of the number and for the multiples
// // of five print “buzz”. For numbers which are multiples
// // of both three and five print “fizzbuzz”.
// // --- Example
// //   fizzBuzz(5);
// //   1
// //   2
// //   fizz
// //   4
// //   buzz
function fizzbuzz(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0)
      res.push('fizzbuzz');
    else if (i % 3 === 0)
      res.push('fizz');
    else if (i % 5 === 0)
      res.push('buzz');
    else res.push(i);;
  }
  return res.join(' ')
}
console.log(fizzbuzz(15));

function fizBuzz(n) {

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0)
      console.log('fizzbuzz');
    else if (i % 3 === 0)
      console.log('fizz');
    else if (i % 5 === 0)
      console.log('buzz');
    else console.log(i);
  }
}
module.exports = fizBuzz;
