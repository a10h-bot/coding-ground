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
//[ { name: 'Thomas Calls', age: 19 },
//{ name: 'Liam Smith', age: 20 },
//{ name: 'Jessy Pinkman', age: 18 } ]

//same code with use of filter
//functional way

const peopleAbove18New = collection => {
  return collection.filter(x => x.age >= 18);
};

console.log(peopleAbove18New(people));

//{ name: 'Thomas Calls', age: 19 },
//{ name: 'Liam Smith', age: 20 },
//{ name: 'Jessy Pinkman', age: 18 } ]
//1every thing in javaScript is an object

let x = [3, 8, 9, 10];
let y = x.filter(x => {
  return x % 2 === 0;
});

console.log(y);
let sum = x.reduce((accumulator, element) => {
  return (accumulator += element);
}, 0);

console.log(sum);
