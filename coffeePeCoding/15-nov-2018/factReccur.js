var x = n => {
  if (n === 1) {
    return 1;
  } else {
    return n * x(n - 1);
  }
};

console.log(x(5));

let f = n => (n > 1 ? n * f(n - 1) : 1);

console.log(f(5));
