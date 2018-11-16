let res = n => {
  let rev = 0;
  while (n !== 0) {
    let x = n % 10;
    rev = rev * 10 + x;
    n = Math.floor(n / 10);
  }
  return rev;
};

console.log(res(2789));
