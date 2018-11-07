
let person = {
  fullName : "John Willy ",
  setfunction : function(name){
    this.fullName = name;
  },
  getFullName :function() {
    return this.fullName;
  }
};

console.log(person.fullName);
person.setfunction("George Bush");
console.log(person.fullName);
console.log(person.getFullName());

let myCar =new Object();
myCar.name ="Suzuki";
myCar.color ="Red";

console.log(myCar);
console.log(myCar['name']);
//----------------------------------------------------------------------------------

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object(),
    arr = [3,6,7,9];

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string'
myObj[arr]              ='An array';

console.log(myObj);


let ages = new Map();
ages.set("ABC",27);
ages.set("PQS",45);
console.log(ages);

//_______________________________________

let add =function(m,n){
return m+n;
};
console.log(add(7,8));

function add1(m,n){
  return m+n;
}
console.log(add1(8,34));

let addition =(m,n)=> {let x=m+n;
  return x;
};

console.log(addition(6,8));

function power(base =4, exponent =3) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(2));
console.log(power());
