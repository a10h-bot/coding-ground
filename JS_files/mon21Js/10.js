function mergeSortedArray(arrayA, arrayB) {
  // let n = arrayA.length;
  // let m = arrayB.length;
  // for (let i = 0; i < m; i++) {
  //   if (arrayB[i] <= arrayA[n - 1]) {

  //   }
  //   if (arrayB[i] > arrayA[n - 1]) {
  //     arrayA.push(arrayB[i]);
  //   }
  // }
  // return arrayA;

  let res = [];
  let min = 0;
  for (let i = 0; i < arrayB.length; i++) {
    min = arrayB[i];
    for (let j = 0; j < arrayA.length; j++) {
      if (min > arrayA[j]) {
        min = arrayB[i];
      }
      res.push(min);
      min = arrayB[i + 1]

    }

  }
  return res;

}

let a = [2, 3, 5, 7, 8, 10];
let b = [4, 9, 9, 12, 17];

console.log(mergeSortedArray(a, b));