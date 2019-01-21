//Find Missing Number on Integer Array of 1 to 100

function findMissingNum(array) {
  let n = array.length;
  let m = n + 1;
  let res = 0;
  let sum = m * (m + 1) / 2;
  for (let i = 0; i < n; i++) {
    res += array[i];
  }
  return Math.abs(res - sum);
}

console.log(findMissingNum([1, 2, 3, 4, 6, 7, 9, 8]));

function findMissingNum1(array) {
  let a = [];
  let n = array.length;
  for (let i = 0; i <= n; i++) {
    a.push(0);
  }
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    a[i] = array[i]

  }
  let missingEle = array[n / 2];
  if (missingEle)

    return a

}

console.log(findMissingNum1([1, 2, 3, 4, 6, 7, 9, 8]));