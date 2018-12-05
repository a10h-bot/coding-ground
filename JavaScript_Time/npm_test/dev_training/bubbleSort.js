function bubbleSort(A) {
  for (let pass = A.length - 1; pass >= 0; pass--) {
    console.log(pass);

    for (let i = 0; i <= pass - 1; i++) {
      if (A[i] > A[i + 1]) {
        let temp = A[i];
        A[i] = A[i + 1];
        A[i + 1] = temp;
      }
    }
  }
  return A;
}

console.log(bubbleSort([2, 6, 8, 9, 10, 4]));

//eggs puzzle

//sorting

//few classes wrote in java and JS

//Dynamic programming started

//memoization vs computation
//few algorithmisc challenges solved
//
