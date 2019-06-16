//remove duplicate numbers from array

function removeDuplicate(array) {
  let x = [],
    j = 0;
  x[j] = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== x[j]) {
      x.push(array[i])
      j += 1;
    }
  }
  return x
}
console.log(removeDuplicate([1, 2, 2, 5, 8, 8, 9]));