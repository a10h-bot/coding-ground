//given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//o(n2)
function findSum(arr, sum) {
  let yes = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        yes = true;
      }
    }
  }
  return yes;
}
let A = [10, 15, 3, 7];
let s = -1;
console.log(findSum([3, 5, 2, -4, 8, 11], s));

function findSum2(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result.push(i, j);
      }
    }
  }
  return result;
}
//let A = [10, 15, 3, 7];
let s1 = 11;
console.log(findSum2([3, 5, 2, -4, 8, 11, 9], s1));
