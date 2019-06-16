let rabbit = {};
rabbit.speak = function(line) {
  console.log("The rabit says " + line);
};
rabbit.speak("I am alive");

let sayHi = {
  a: "hello Bro!",
  b: "Hello world",
  learnCode: ["HR", "CodeForces", 90]
};
console.log(sayHi.learnCode);
let myCar = new Object();
myCar.color = "red";
myCar.price = "2000";
console.log(myCar.color);
console.log(myCar["price"]);
//
