function qsort(array) {
  let less = [];
  let more = [];
  let pointer = array[0];
  if (array.length <= 1) {
    return array;
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pointer) {
      less.push(array[i]);
    } else {
      more.push(array[i])
    }
  }
  return qsort(less).concat(pointer, qsort(more))
}
console.log(qsort([6, 4, 7, 2, 9, 0, 1, 10]));