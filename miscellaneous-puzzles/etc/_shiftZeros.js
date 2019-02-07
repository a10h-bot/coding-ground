// O(1) space and  o(n) time complexity
function shiftZeroToEnd(arr) {
  let j = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[j++] = arr[i];
    }
    if (arr[i] === 0) {
      count++;
    }
  }
  for (let i = arr.length - count; i < arr.length; i++) {
    arr[i] = 0
  }
  return arr;
}
console.log(shiftZeroToEnd([0, 3, 2, 0, 6, 8, 0]));

function shiftZeros(array) {
  let a = [];
  array.forEach(x => {
    if (x === 0) {
      a.push(x);
    }
    if (x !== 0) {
      a.unshift(x);
    }

  })
  return a;
}
console.log(shiftZeros([0, 3, 2, 0, 6, 8, 0]));
// o(n) space and o(n)+O(n) time complexity
function shiftZeros2(array) {
  let a = [];
  array.forEach(x => {
    if (x !== 0) {
      a.push(x);
    }

  })
  array.forEach(x => {
    if (x === 0) {
      a.push(x);
    }
  })
  return a;
}
console.log(shiftZeros2([0, 3, 2, 0, 6, 8, 0]));