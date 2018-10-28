
function singlyLinkedList(){
    this.head=null;
    this.lenght=0;
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
 this.add = function(item){
    while(item != null){
         if(this.head===null){
             head=new Node(item);
         }
         else {
             var newNode =new Node(item);
             newNode.next=head;
             head=newNode;
         }
    }
};
this.length++;
this.printList =function(){
  var curr = this.head;
 while(curr !=null){
     console.log(curr.data);
     curr=curr.next;
     
 }

};
}
var list= new singlyLinkedList();
list.add(5);
console.log(list.printList());
console.log("testing");

