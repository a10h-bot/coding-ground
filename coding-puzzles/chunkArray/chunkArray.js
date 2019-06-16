// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
function chunkArray(array, size) {
  let res = [];
  for (let index = 0; index < array.length; index += size) {
    let chunk = array.slice(index, index + size)
    res.push(chunk);
  }
  return res;
}
console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 2))
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkArray([1, 2, 3, 4, 5], 4));

Array.prototype.chunk = function (chunk_size) {
  if (!this.length) {
    return [];
  }

  return [this.slice(0, chunk_size)].concat(this.slice(chunk_size).chunk(chunk_size));
};

console.log([1, 4, 8, 4, 6].chunk(2));

module.exports = chunkArray;