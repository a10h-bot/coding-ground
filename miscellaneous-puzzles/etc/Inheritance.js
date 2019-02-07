class person{
    constructor(name,age){
        this.name=name;
        this.age =age;
    }
    canWalk(){
        console.log('Person is walking');
    }
    describeMe(){
        console.log(`I am ${this.name} from person class`);
        
    }
    canWalk(value){
        return Math.sqrt(value);
    }
}
class programmer extends person{
    constructor(name,age,yearsOfExp){
           super(name,age);
           this.yearsOfExp=yearsOfExp;
    }
    canWalk(){
        console.log("Programmer is running");
        
    }
    
}
let p = new person('David',26);
let pr =new programmer('Bob',28,3);
console.log(p);
console.log(pr);
p.canWalk();
pr.canWalk();
p.describeMe();
pr.describeMe();
console.log(pr.canWalk(16));




