//How to find all pairs on integer array whose sum is equal to given number

function twoSum(array, sum) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === sum) {
        res.push(array[i], array[j]);
      }
    }
  }
  return res.join(" ");
}
console.log(twoSum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7));
//-------------------------------------------------------------------------------------------------------