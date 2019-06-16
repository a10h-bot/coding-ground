function node1(data){
    this.data=data;
    this.next=null;
}
var n1 = new node1(90);
console.log(n1);
// var ,let , const
var x = 7;
console.log(x+2);

class LL {
    constructor(){
        this.head=null;
        this.length=0;
    }
 node2(data){
     this.data=data;
     this.next=null;
 }
   
}
let l =new LL();
console.log(l.node2(8));

function LL_one (){
    this.head=null;
    this.lenght=0;
 let node3 = function(data){
     this.data=data;
     this.next=null;
 };
this.add = function(data){
    this.head= new node3(data); 
    this.length+=2;
};
this.size= function(){
    return length;
};
}
var newNode = new LL_one();
newNode.add(70);
console.log(newNode.head.data);
console.log(newNode.size());



