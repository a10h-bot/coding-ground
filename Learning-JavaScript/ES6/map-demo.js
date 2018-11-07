//Imperative style of code

const people = [
  { name: "Virat", age: 16 },
  { name: "Kohli", age: 19 },
  { name: "Rohit", age: 20 },
  { name: "Kaif", age: 18 }
];

const TeaLovers = ["Virat", "Kohli", "Rohit", "Kaif"];

const findTeaLover = collection => {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    if (TeaLovers.includes(element.name)) {
      element.TeaLovers = true;
    } else {
      element.TeaLovers = false;
    }
    result.push(element);
  }

  return result;
};

console.log();

//functional style of same code using Map
const findTeaLoverNew = collection => {
  return collection.map(element => {
    element.TeaLovers = TeaLovers.includes(element.name);
    return element;
  });
};
