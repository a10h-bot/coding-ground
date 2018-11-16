function threeSum(arr, sum) {
  let res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          res.push(arr[i], arr[j], arr[k]);
        }
      }
    }
  }
  return res;
}

let A = [1, 2, 8, 5, 9, 6];
let S = 11;
console.log(threeSum(A, S));
