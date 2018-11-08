// cerat a function which return the square of passed argument :
var x = a => a * a;

console.log(x(6));

//create a function to calculate factorial of a number :
let fact = n => {
  if (n === 1) return 1;
  else {
    return n * fact(n - 1);
  }
};
console.log(fact(5));

let make_max = (x, y) => x * y;

console.log(make_max(4, 5));

//create a function that takes 3 arguments and return the maximum of them :

let find_max = (x, y, z) => {
  if (x > y && x > z) return x;
  else if (y > x && y > z) return y;
  else return z;
};
console.log(find_max(3, 4, 78));

//filter out even number from the given array
let array = [2, 5, 8, 9, 13, 10, 12];
let printEven = x => {
  return x.filter(y => y % 2 == 0);
};
console.log(printEven(array));

//Given an array filter out all the array in pair which adds up to a given sum
var collection = [1, 2, 5, 9, 3, 6, 4];
var sum = 7;
var res = [];
var filterInPair = (a, s) => {
  for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === sum) {
        res.push(a[i], a[j]);
      }
    }
  }
  return res;
};

console.log(filterInPair(collection));

const numArray = [1, 2, 5, 9, 3, 6, 4];
const n = 7;
const filterInPair2 = (n, sum) => {
  return n.filter();
};
