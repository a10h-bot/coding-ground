function Particle(x,y){
  this.x=x;
  this.y=y;
}
Particle.prototype.sayHi = function(){
   console.log(this.y);
 }
var user =new Particle(10,11);
user.sayHi();

class Particle2{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  sayHi()
  {
    console.log(this.y);
  }
}

let z = new Particle2(5,8);
z.sayHi();

function prototypeTest(x){
   this.x=x;
}
prototypeTest.prototype.addition= function(y,z){
  return y+z;
}
prototypeTest.prototype.minus =function(y,z) {
  return y-z;
}
 const p =new prototypeTest(5);
console.log(p.addition(5,6));
console.log(p.minus(90000,1190));

class prototypeTest1{
  constructor(){

  }
  addition1(y,z){
    return y+z;
     
  }
  minus1(y,z){
    return y-z;
  }
}

let value =new prototypeTest1();

console.log(value.addition1(8,90));
console.log(value.minus1(100,87));


