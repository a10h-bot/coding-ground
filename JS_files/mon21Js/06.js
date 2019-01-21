//reverse an array elemnt in place

function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray([2, 4, 6, 9, 10]));

function reverseArray1(array) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
  return array;
}
console.log(reverseArray1([2, 4, 6, 9, 10]));