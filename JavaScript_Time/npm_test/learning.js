let x = ["G", "B", "R", "R", "B", "R", "G"];
x.sort();
let y = [2, 8, 9, 16, 20];
y.sort((a, b) => {
  return a - b;
});
console.log(x);
console.log(y);
let z = [1, 2, 4, 5, 6, 8];
z.fill(7, 0, 5);
console.log(z);
console.log(z.shift());
console.log(z);
console.log(z.reverse());

let array = [2, 4, 8, 9, 10];
array.splice(0, 3);

console.log(array);
//-----------------------------------------------------------
var indices = [];
var array1 = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array1.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array1.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
months.splice(3, 1, "hello");
console.log(months);

console.log(Array(6));
console.log(Array.of(9, 8, 2, 4));
let ptr = Array.of(9, 8, 2, 4);
console.log(ptr.length);

console.log(Function.length);

console.log(function() {}.length);
console.log(function(a, b) {}.length);

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));
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

function Test(n) {
  return function TestValue() {
    return "I am from Test value";
  };
}

const calTest = Test(9);
const callTestValue = calTest();
console.log(callTestValue);
