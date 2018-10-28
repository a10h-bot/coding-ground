

//[✅] diferences between var(function level access), let(block level access)
// const(immutable) keywords in javaScript
//[✅] Arrrow functions
//[✅] Array and Objects
//[x] classes and constructor => objects in javaScript
//[x] Inheritance 
//[x]
/*
let array = [7, "hello", 8];
console.log(array);

const x = 6;
function test() {
    let x = 8;
    console.log(x);

}

console.log(x);
let person = { name: "Bob", age: 27 };
console.log(person.name);
person.name = "Alice";
console.log(person.name);
let Alien = {};
Alien = person

console.log(Alien);

const Square = function (n) {
    return n * n;
}
console.log(Square(5));

function SquareOne(n) {
    return n * n;
}
console.log(SquareOne(8));

const squareNew = n => n * n;
console.log(squareNew(6));

var u = (n = 8) => n * n;
console.log(u(undefined));


*/
countBs=(args) =>{
    let count =0;
    for(let i=0;i<args.length;i++){
       if(args[i]==="B"){
         count++;
       }
    }
    return count;
    };   
  
  console.log(countBs("BBBBC"));

  countChar=(args1,agrs2) =>{
      let count=0;
        for(let i=0;i<args1.length;i++){
            if(args1[i]==agrs2){
                count++;
            }
        }
        return count;
  };
  console.log(countChar("kakkerlak", "k"));