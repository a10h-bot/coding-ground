function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
//Multiply the result by 3 (14 × 3 = 42)
//Add the even - numbered digits
//Find the result modulo 1
//If M is not 0, subtract M from 10 to get the check digit

let prodCode = "1234567";
let k = 1;
let sumOfOdd = 0;
let sumOfEven = 0;
let resultFinal = 0;
let y = 0;
for (let i = 0; i < prodCode.length; i++, k++) {
  let element = prodCode.charAt(i);
  if (k === 1 || k % 2 !== 0) {
    sumOfOdd += parseInt(element, 10);
  } else {
    sumOfEven += parseInt(element, 10);
  }
}
resultFinal = sumOfOdd * 3 + sumOfEven;
resultFinal %= 10;
if (resultFinal !== 0) {
  resultFinal = 10 - resultFinal;
}
console.log(resultFinal);
//one line solution using reduce
const upc = code =>
  (10 -
    (code
      .toString()
      .padStart(11, "0")
      .split("")
      .reduce(
        (sum, digit, index) =>
          (sum += index % 2 ? parseInt(digit) : parseInt(digit) * 3),
        0
      ) %
      10)) %
  10;
console.log(upc("12345678910"));
