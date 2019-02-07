class Node{
  constructor (data,left = null,right = null){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}
class BinarySearchTree{
  constructor(){
    this.root =null;
  }
add(data){
  const node =this.root;
  if(node===null){
    this.root=new Node(data);
    return;
  } else {
     const searchTree =function(data) {
         if(data<root.data){
            if(root.left ==null){
              root.left = new Node(data);
              return;
            }
            else if(root.left!=null){
              return searchTree(root.left);
            }
         }
         else if(data>root.data){
           if(root.right==null){
             root.right =new Node(data);
             return;
           }
           else if(root.right !=null){
             return searchTree(root.right);
         }
         else return null;
       };
       return searchTree(node);
     }
  }
  findMinElem(){
    let current = this.root;
     while(current.left !=null){
       current=current.left;
     }
     return curen.data;
  }
findMax(){
var current= this.root;
while(current.right !=null){
  current =current.right;
}
return current.data;
}

findData(data){
let current=root.data;
if(current.data===data){
  return true;
}
else if(current.data > data)
{
  return findData(current.left);
}
else if(current.data < data){
  return findData(current.right)
}

else {
  return false;
}
}
