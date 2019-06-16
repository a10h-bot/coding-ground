// There is an array with every element repeated twice except one. Find that element?

function findNonRepeatinNum(array) {
  let o = {};
  let c = 1;
  for (let i = 0; i < array.length; i++) {
    let ele = array[i];
    if (o[ele] === undefined) {
      o[ele] = c;
    } else {
      o[ele] = c++;
    }

  }
  return o;
}
console.log(findNonRepeatinNum([1, 1, 2, 2, 3, 4, 4, 5, 5]));

let xo = {};
xo["9"] = "Anand"
console.log(xo);

function twoSum(arr, S) {
  let hashTable = {};
  // check each element in array
  for (let i = 0; i < arr.length; i++) { // calculate S - current element
    let sumMinusElement = S - arr[i]; //10-4,10-6,10-7,10-8
    // check if this number exists in hash table
    if (hashTable[sumMinusElement] !== undefined) {
      return true;
    }
    // add the current number to the hash table
    hashTable[arr[i]] = true;
  }
  return false;
}
console.log(twoSum([4, 6, 7, 8], 10));