// find the pair of numbers which ads up to given sum
//O(n2) solution not optila at all
let findPair = (array, sum) => {
  let x = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        x.push([array[i], array[j]]);
      }
    }
  }
  return x;
};
console.log(findPair([1, 2, 8, 5, 2, 3, 9], 4));

//find frequncies of given array elments
let x = [2, 4, 6, 3, 2];
let y = {};
let count = 1;
for (let i = 0; i < x.length; i++) {
  if (y[x[i]] === undefined) {
    y[x[i]] = count;
  } else {
    y[x[i]] = ++count;
  }
}

console.log(y);
