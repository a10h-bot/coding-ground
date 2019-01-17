const power = function(base,exponent){
   let res = 1;
   for(let i =0 ;i<exponent ;i++){
       res *=base;
   }
   return res;
};

console.log(power(2,5));

function power2(base,exponent){
    let res = 1;
    for(let i =0 ;i<exponent ;i++){
        res *=base;
    }
    return res;
}
console.log(power2(2,10));

const power3 =(base,exponent)=>{
    let res = 1;
    for(let i =0 ;i<exponent ;i++){
        res *=base;
    }
    return res;
};

console.log("The result is " + power3(4,5));

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
console.log(square1(4));
console.log(square2(9));

const  printSomthing =  () => {
    console.log("Hi I am Mr eddy !!");
};

console.log(printSomthing());

console.log("------------------------");

function greet(what){
    console.log(" Welcome to : " + what);
}

console.log(greet("jungle"));

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog")); // -> 16

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
  
  console.log(minus(10));
  // → -10
  console.log(minus(10, 5));
  // → 5

  