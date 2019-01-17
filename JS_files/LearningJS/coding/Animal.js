class User{
  constructor(){
    this.name='Anand';
    this.lastName='Prakash';
    this.profession='Developer';
  }
  getFullNem(){
    return this.name+ " " + this.lastName;
  }
}

const anand = new User();
console.log(anand.getFullNem());
function User(){
  this.name='Anand';
  this.lastName="Prakash";
  this.profession='Developer';
}
User.prototype.getFullName=function(){
  return this.name+ " " + this.lastName;
}
let anand= new User();
console.log(anand.getFullName());
