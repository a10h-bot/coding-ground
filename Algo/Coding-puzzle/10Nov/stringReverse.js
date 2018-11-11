let x = () => {
  let s = "Hello";
  let res = "";
  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
};
console.log(x());
