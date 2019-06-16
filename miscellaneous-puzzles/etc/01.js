let x = number => {
  return () => {
    console.log("I am higher order function example !!");
  };
};
const y = x()();

const p = () => {
  return num => {
    return num * num;
  };
};
let q = p();
console.log(q(3));

let returnFn = n => {
  return () => {
    return 6;
  };
};

let u = returnFn(29);
console.log(u());
const numbers = [1, 2, 3];
numbers.forEach((number, index) => {
  console.log(number, index);
});
