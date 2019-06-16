const array = [1, 2, 4, 5, 3, 2];
let sum = 0;
array.forEach(x => {
  sum += x;
});

console.log(sum);
//same code using reduce

let add = array.reduce((add, x) => {
  add += x;
  return add;
}, 0);

console.log(add);
var person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function() {
    return 6;
  },
  greeting: function() {
    console.log("Hi! I'm " + this.name[0] + ".");
  }
};
person.greeting();

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
  return number => number * factor;
}
let mul = multiplier(10);
console.log(mul(6));

let twice = multiplier(2);
console.log(twice(5));
