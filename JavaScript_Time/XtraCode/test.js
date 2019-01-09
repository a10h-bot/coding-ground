//find smallest element in the array
//find 2nd smallest element in the array

function findMin(arr) {
  let min = arr[0];
  let min2 = arr[1];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
      min2 = min;
      min = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  return min2;
}
console.log(findMin([2, 3, 0, 6]));
