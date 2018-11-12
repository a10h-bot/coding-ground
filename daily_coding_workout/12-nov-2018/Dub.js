// How to find duplicate number

let findDub = arr => {
  let obj = {};
  let count = 1;
  let res = false;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = count;
    } else obj[arr[i]] = count + 1;
  }
  for (let x in obj) {
    if (obj.hasOwnProperty(x)) {
      if (obj[x] === 2) {
        res = x;
      }
    }
  }
  return res;
};
console.log(findDub([1, 8, 8, 9, 0, 4, 6]));
console.log(findDub([0, 3, 1, 2, 3]));
