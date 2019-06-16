//find kth smallest element in unsorted array

function findkthSmallest(array, k) {
  return array.sort((a, b) => a - b)[3]
}

console.log(findkthSmallest([2, 6, 8, 9, 10, 4], 3));

//--------------------------------------------------------------------------------
function findkthSmallest1(array, k) {

}
console.log(findkthSmallest1([2, 6, 8, 9, 10, 4]));