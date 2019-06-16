// 1> Count Number of Digits in an Integer

let countDigits = n => {
  let count = 0;
  while (n > 0) {
    let x = n % 10;
    count++;
    n = Math.floor(n / 10);
  }
  return count;
};

console.log(countDigits(1276666)); // 7
//---------------------------------------------------------------------------------------
//2 >check for Armstronh number ! like 153 = 1*1*1 + 5*5*5 + 3*3*3  // 153 is an Armstrong number.

let isArmstrongNum = n => {
  let num = n;
  let res = 0;
  while (n != 0) {
    let x = n % 10; // 3  | 5
    res = res + x ** 3; //0+3^3  | 27 +5^3
    n = Math.floor(n / 10); //15  | 1
  }
  console.log(res);
  console.log(n);

  if (num === res) return true;
  else return false;
};

console.log(isArmstrongNum(153)); //true
console.log(isArmstrongNum(15656)); //false

console.log(1 % 10);
//----------------------------------------------------------------------------
// check if the numbers is prime ?
const isNumberPrime = n => {
  let count = 0;
  let x = n - 1;
  while (x != 1) {
    if (n % x === 0) {
      count = count + 1;
    }
    x--;
  }
  console.log(count);

  if (count === 0) return true;
  else return false;
};

console.log(isNumberPrime(99)); //false
//______________________________________________________________________________________
// 2nd method
let isPrime = n => {
  let flag = true;
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
console.log(isPrime(13)); // true
