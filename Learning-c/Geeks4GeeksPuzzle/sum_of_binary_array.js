// Given two binary arrays arr1[] and arr2[] of same size n. Find length of the
// longest common span (i, j) where j >= i such that arr1[i] + arr1[i+1] + …. +
// arr1[j] = arr2[i] + arr2[i+1] + …. + arr2[j].

// Expected time complexity is Θ(n).
// Input: arr1[] = {0, 1, 0, 0, 0, 0};
// arr2[] = {1, 0, 1, 0, 0, 1};
// Output: 4
function findMaxLength(arr1, arr2) {
  let maxLength = 0;
  for (let i = 0; i < arr1.length; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = i; j < arr2.length; j++) {
      sum1 += arr1[j];
      sum2 += arr2[j];
      if (sum1 === sum2) {
        let len = j - i + 1;
        if (len > maxLength) {
          maxLength = len;
        }
      }
    }
  }
  return maxLength;
}

A1 = [0, 1, 0, 0, 0, 1, 0, 0];
A2 = [1, 0, 1, 0, 0, 1, 1, 0];
console.log(findMaxLength(A1, A2));
