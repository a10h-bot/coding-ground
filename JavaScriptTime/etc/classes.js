// classes,constructor,getter,setters and static functions //

class Rectangle{
    constructor(_length,_width,_color){
        console.log("An rectangle is created");
        this.length = _length;
        this.width  = _width;
        this.color  = _color;
    }
     getArea(){
       return this.length * this.width;   
    }
    printDescription(){
        console.log(`I am reactangle of ${this.length} and ${this.width}`);
    }
    get area(){
        return this.length * this.width;
    }
    set seTcolor(value){
        this.color=value;
    }
    static method(a,b){
        return a+b;
    }
}


let rect = new Rectangle(8,4,'Red');
console.log(rect);
console.log(rect.getArea());
console.log(rect.area);
console.log(rect.color);
rect.seTcolor = "Blue";
console.log(rect);
console.log(Rectangle.method(7,9));









