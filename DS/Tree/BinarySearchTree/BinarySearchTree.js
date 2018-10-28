//created by Anand /12/10/18
/* BinaryTreeImplementaion In JavaScript
traverseDF(callback)
traverseBF(callback)
contains(data, traversal)
add(child, parent)
remove(node, parent)

*/
function Node(data){
    this.data=data;
    this.parent=null;
    this.child=[];
}
function Tree(data){
    var node=new Node(data);
    this._root=node;
}
console.log(Tree);
let a =6;
console.log(a);
let array =['Hello Nidhi',5];
console.log(array);





