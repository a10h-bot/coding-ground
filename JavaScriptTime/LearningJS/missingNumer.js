/*Given an array of integers, find the first missing positive integer in linear time and constant space.In other words, find the lowest positive integer that does not exist in the array.The array can contain duplicates and negative numbers as well.

For example, the input[3, 4, -1, 1] should give 2. The input[1, 2, 0] should give 3.

You can modify the input array in -place.*/

function findMissingNum(arr) {
  let val;
  let n = arr.length;
  let nextval;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= 0 || arr[i] > n) continue;
    val = arr[i];

    while (arr[val - 1] != val) {
      nextval = arr[val - 1];
      arr[val - 1] = val;
      val = nextval;
      if (val <= 0 || val > n) break;
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] != i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}

console.log(findMissingNum([3, 4, -1, 1], 2));
console.log(findMissingNum([1, 2, 0], 3));
console.log(findMissingNum([1, 2, 3, 4, 6], 5));
