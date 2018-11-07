//Without use of filter
//Or we can say imperative way :

const people = [
  { name: "John Doe", age: 16 },
  { name: "Thomas Calls", age: 19 },
  { name: "Liam Smith", age: 20 },
  { name: "Jessy Pinkman", age: 18 }
];

const peopleAbove18 = collection => {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    let person = collection[i];
    if (person.age >= 18) {
      result.push(person);
    }
  }
  return result;
};

console.log(peopleAbove18(people));

//same code with use of filter
//functional way

const peopleAbove18New = collection => {
  return collection.filter(x => x.age >= 18);
};

console.log(peopleAbove18New(people));
