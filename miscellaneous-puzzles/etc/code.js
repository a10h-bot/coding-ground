const upc = code =>
  (10 -
    (code
      .toString()
      .padStart(11, "0")
      .split("")
      .reduce(
        (sum, digit, index) =>
        (sum += index % 2 ? parseInt(digit) : parseInt(digit) * 3),
        0
      ) %
      10)) %
  10;

console.log(upc('123678980'));