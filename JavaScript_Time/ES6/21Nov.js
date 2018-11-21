const people = [{
        name: "Virat",
        age: 16
    },
    {
        name: "Kohli",
        age: 19
    },
    {
        name: "Rohit",
        age: 20
    },
    {
        name: "Kaif",
        age: 18
    }
];
/*
let result =[];
for(let i=0;i<people.length;i++){
    if(people[i].age>=19){
        result.push(people[i]);
    }
}
*/
let result = people.filter(x => x.age % 2 !== 0)
let result2 = people.filter(function (n) => {
    return n.age > 18;
});

console.log(result);
console.log(result2);