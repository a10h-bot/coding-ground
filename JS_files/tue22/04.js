function fun(array) {
  let pi = array[array.length - 1];
  let i = 0;
  let j = 0;
  while (true) {
    if (array[j] <= pi) {
      i++;
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    if (array[j] > pi) {
      j++;
    }
  }
  return array;
}
console.log(fun([9, 6, 5, 0, 8, 2, 4, 7]));