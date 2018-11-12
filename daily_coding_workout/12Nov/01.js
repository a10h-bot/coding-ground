// Given an array of random numbers, Push all the zero’s of a given array to the end of the array

/* let x = array => {
  let res = [];
  let n = array.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (array[i] === 1) {
      res.push(array[i]);
      count++;
    }
  }
  let j = n - count - 1;
  while (j < n) {
    res[j] = 0;
    j++;
  }
  return res;
};


console.log(x([1, 0, 0, 1, 1, 0, 0, 0, 1]));

*/
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
