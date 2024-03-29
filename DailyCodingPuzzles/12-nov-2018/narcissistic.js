/*A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function



*/
let narcissistic = value => {
  let leng = (value + "").replace(".", "").length;
  if (leng === 1) return true;

  let s = 0;
  let res = value;

  for (let i = 0; i < leng; i++) {
    let x = res % 10;
    x = x ** leng;
    res = Math.floor(res / 10);
    s += x;
  }

  return s === value;
};

console.log(narcissistic(7));
console.log(narcissistic(371));
console.log(narcissistic(153));
console.log(narcissistic(163));
