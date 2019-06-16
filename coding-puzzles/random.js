// //write a function to generate random number  between 1 and 7

// Array.prototype.chunk = function (chunk_size) {
//   if (!this.length) {
//     return [];
//   }

//   return [this.slice(0, chunk_size)].concat(this.slice(chunk_size).chunk(chunk_size));
// };

// console.log([1, 4, 8, 4, 6].chunk(2));

// Array.prototype.getLength = function (n) {
//   return this.length;
// }

// console.log([5, 7, 8].getLength());
// console.log([5, 7, 8].length);

// function particle(x, y) {
//   this.x = x;
//   this.y = y;
// }
// // class particle {
// //   constructor(x, y) {
// //     this.x = x;
// //     this.y = y;
// //   }
// // }

// particle.prototype.sum = function () {
//   return this.x + this.y
// };

// particle.prototype.getLength = function () {
//   return this.x > this.y ? this.x : this.y;
// }
// const x = new particle(5, 7);
// console.log(x);
// console.log(x.sum());
// console.log(x.getLength());
