//How to find largest and smallest number from integer array 

function findLargestandsmallest(array) {
  return array.sort((a, b) => a - b)[array.length - 1];
}

console.log(findLargestandsmallest([2, 4, 7, 8, 9, -7, 10, 3, 6]));
//_____________________________________________________________________________________
function findLargestandsmallest1(array) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  return [min, max];

}

console.log(findLargestandsmallest1([2, 4, 7, 8, 9, 10, 3, 1, 6]));