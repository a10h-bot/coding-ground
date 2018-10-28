class Node{
   int data;
   Node left,right;
    public Node(int data){
       this.data=data;
       this.left=null;
       this.right=null;
    }
    public void insert(int value){
        if(value<=data){
            if(left==null){
                left=new Node(value);
            }
            else{
                left.insert(value);
            }
        }
        else if(value>data){
             if(right==null){
                 right=new Node(value);
             }
             else{
                 right.insert(value);
             }
        }
    }
    public boolean conatains(int value){
           if(data==value){
               return true;
           }
           if(value<=data){
               if(left==null){
               return false;
               }
               else {
                   return left.conatains(value);
               }
           }
            else {
                if(value>data){
                    if(right==null){
                        return false;
                    }
                        else{
                        return right.conatains(value);
                    }
                }
            }
    }
 
  
}

