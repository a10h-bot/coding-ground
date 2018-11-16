function productArray(arr) {
  let resultArray = [];
  let x = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        x *= arr[j];
      }
    }
    resultArray.push(x);
    x /= x;
  }
  return resultArray;
}
//[120, 60, 40, 30, 24]   o(n2)
console.log(productArray([1, 2, 3, 4, 5]));
console.log(productArray([3, 2, 1]));

function prodArray(arr) {
  leftArray = [];
  rightArray = [];
  prodArray = [];
  leftArray[0] = 1;
  rightArray[arr.length - 1] = 1;
  for (let i = 1; i < arr.length; i++) {
    leftArray[i] = arr[i - 1] * leftArray[i - 1];
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    rightArray[i] = arr[i + 1] * rightArray[i + 1];
  }
  for (let i = 0; i < arr.length; i++) {
    prodArray[i] = leftArray[i] * rightArray[i];
  }
  return prodArray;
}
//[120, 60, 40, 30, 24]
console.log(prodArray([3, 2, 1]));

console.log(prodArray([1, 2, 3, 4, 5]));

///
