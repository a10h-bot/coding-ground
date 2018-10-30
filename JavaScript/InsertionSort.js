function insertionSort(array) {
  var length = array.length;

  for (var i = 1, j; i < length; i++) {
    var temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 1];
console.log(insertionSort(arr));