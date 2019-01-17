function removeSmallest(array) {
  if (array.length === 0) {
    return [];
  }
  let smallestIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[smallestIndex] > array[i]) {
      smallestIndex = i;
    }
  }
  let A = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== smallestIndex) {
      A.push(array[i]);
    }
  }
  return A;
}

console.log(removeSmallest([1, 3, 6]));
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4, 0]));
console.log(removeSmallest([2, 2, 1, 2, 1]));