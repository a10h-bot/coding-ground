class Animal{
  constructor(color='black',name=null){
    this.color=color;
    this.name=name;
  }
  get catProperty(){
    return this.color + " "+ this.name;
  }
   walk(){
    console.log('Animal walking !');
    
  }
}
let cat = new Animal();
cat.walk();
console.log(cat.catProperty);


