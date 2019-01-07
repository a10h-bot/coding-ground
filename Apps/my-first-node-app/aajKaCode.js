// //Your function takes two arguments:

// current father's age (years)
// current age of his son(years)
// Сalculate how many years ago the father was twice as old as his son(or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));

let myObj = new Object();
myObj.name = "Student";
myObj.age = 28;
myObj.description = function() {
  return "I am a developer";
};
myObj.myLangCollection = ["JavaScript", "Java", "C++", "C", "C#"];

console.log(myObj.description());
console.log(myObj.myLangCollection);
console.log(myObj["age"]);
//In JS object can be cerated using 4 different ways :
// > Using Object constructor function
let studentObj1 = new Object();
studentObj1.name = "David";
studentObj1["age"] = 25;
console.log(studentObj1);

//> making our own constructor function
function makeObject(name, age) {
  this.name = name;
  this.age = age;
}
let studentObj2 = new makeObject("David", 25);
console.log(studentObj2);

//> Using class and connstructor function
class studentToMakeObj {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let studentObj3 = new studentToMakeObj("David", 25);
console.log(studentObj3);

//>Using Object.create() method
//java is prototype based language
function Point(x, y) {
  this.x = 6;
  this.y = 9;
}
console.log(new Point());
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

console.log(new Person());

function prototypeTest() {}
console.log(prototypeTest.prototype);

//Itirating through Object

let Developer = {
  Name: "David",
  age: 35,
  Adress: "Kolkata",
  FullName: function() {
    return this.Name + " " + this.Adress;
  }
};
for (let i in Developer) {
  console.log(Developer[i]);
}

console.log(Developer.FullName());
