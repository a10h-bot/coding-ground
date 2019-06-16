function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap = wrapValue(8);
let x = wrapValue(100);
console.log(wrap());
console.log(x());

const a = b => b * b;
console.log(a(6));

const cal_value = (a, b) => {
  let x = a * b;
  return m => x * m;
};
const testValue = cal_value(5, 6);
console.log(testValue);
console.log(testValue(6));
