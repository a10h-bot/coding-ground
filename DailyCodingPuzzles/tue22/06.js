class A {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

console.log(new A(3, 5));

console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"
let x = {
  x: "hello",
  y: function() {
    return "Done";
  }
};
console.log(JSON.stringify(x));
