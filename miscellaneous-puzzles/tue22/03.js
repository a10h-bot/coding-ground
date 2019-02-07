function Sort(array) {
  return quickSort(array);
}

function quickSort(array, i, j) {
  let i = 0;
  let j = array.length - 1;
  let pivot = array[i + (j - i) / 2];
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(i, j);
      i++;
      j--;
    }
    if (low < j) {
      quickSort(low, j);
    }
    if (i < high) {
      quickSort(i, high);
    }
  }

  function swap(i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}



console.log(Sort([5, 4, 3, 6, 1, 4, 3, 9, 12, 0, 17, 11]));