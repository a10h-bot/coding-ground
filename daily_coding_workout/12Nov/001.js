let x = array => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[count++] = array[i];
    }
  }
  while (count < array.length) {
    array[count++] = 0;
  }
  return array;
};

console.log(x([1, 0, 0, 1, 1, 0, 0, 0, 1, 1]));
