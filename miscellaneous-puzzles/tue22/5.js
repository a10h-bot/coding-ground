function questionMark(str) {
  let n = str.length;
  let res = false;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!isNaN(str.charAt(i))) {
      let j = i + 1;
      while (isNaN(str.charAt(j))) {
        if (str.charAt(j) === "?") {
          count += 1;
          j += 1;
        }
      }
    }
  }
  if (count === 3) {
    res = true;
  }

  return res;
}

console.log(questionMark("arrb6???4xxbl5???eee5"));
// console.log(questionMark("acc?7??sss?3rr1??????5"));
// console.log(questionMark("5??aaaaaaaaaaaaaaaaaaa?5?5"));
// console.log(questionMark("9???1???9???1???9"));
console.log("you".charAt(2));

console.log(isNaN("a"));
