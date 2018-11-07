//given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
var findSum = function(arr, sum) {
  let hashTable = {};
  let sumArr = [];
  for (let i = 0; i < arr.length; i++) {
    let x = sum - arr[i];
    if (hashTable[x] !== undefined) {
      sumArr.push([arr[i], x]);
    }
    hashTable[arr[i]] = arr[i];
  }
  return sumArr;
};

let A = [10, 15, 3, 7];
let s = 25;
console.log(findSum(A, s));
