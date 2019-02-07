// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  let reversed = 0;
  while (num > 0) {
    let x = num % 10;
    reversed = reversed * 10 + x;
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reverseInt(12345));

module.exports = reverseInt;


