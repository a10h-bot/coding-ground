//Given an 11 - digit number, find the 12th digit that would make a valid UPC.
//You may treat the input as a string if you prefer, whatever is more convenient.
//If you treat it as a number, you may need to consider the case of leading 0's to
// get up to 11 digits. That is, an input of 12345 would correspond to
//a UPC start of 00000012345.

function generateBarcode(prodCode) {
  let k = 1;
  let sumOfOdd = 0;
  let sumOfEven = 0;

  for (let i = 0; i < prodCode.length; i++, k++) {
    let element = prodCode.charAt(i);
    if (k === 1 || k % 2 !== 0) {
      sumOfOdd += parseInt(element, 10);
    } else {
      sumOfEven += parseInt(element, 10);
    }
  }
  let resultFinal = sumOfOdd * 3 + sumOfEven;
  console.log(resultFinal);
  console.log(sumOfEven);
  console.log(sumOfOdd);

  let M = (resultFinal %= 10);
  console.log(M);

  if (M !== 0) {
    return 10 - M;
  } else {
    return M;
  }
}
console.log(generateBarcode("036000291452"));
