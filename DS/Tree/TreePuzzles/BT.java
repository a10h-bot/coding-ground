import java.util.ArrayList;
import java.util.Stack;

class Node{
    int data;
    Node left,right;
    public Node(int data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
 public class BT{
    Node root;
    public BT(){
        root=null;
    }
    public BT(int value){
        root =new Node(value);
    }

    public void PreOrderTraversal(Node root){
        if(root !=null){
            System.out.println(root.data);
            PreOrderTraversal(root.left);
            PreOrderTraversal(root.right);
        }
    }
    public void InOrderTraversal(Node root){
        if(root !=null){
            InOrderTraversal(root.left);
            System.out.println(root.data);
            InOrderTraversal(root.right);
        }
    }
    public void PostOrderTraversal(Node root){
        Node root2 = root;
		if(root2!=null){
            PostOrderTraversal(root2.left);
            PostOrderTraversal(root2.right);
            System.out.println(root2.data);

        }
    }
    public ArrayList<Integer> InOrderNonRecursive(Node root){
        ArrayList<Integer> result =new ArrayList<Integer>();
        Stack<Node> stack =new Stack<Node>();
        Node current =root;
        boolean done =false;
        while(!done){
            if(current !=null){
            stack.push(current);
            current=current.left;
        }
        else{
            if(stack.isEmpty()){
                done=true;
            }
            else{
                current=stack.pop();
                result.add(current.data);
                current =current.right;
            }
        }
       }
       return result;
    }
    public ArrayList<Integer>    
    
 
    public static void main(String[] args){
        BT tree = new BT();
        tree.root =new Node(1);
        tree.root.left=new Node(2);
        tree.root.right=new Node(3);
        tree.root.left.left=new Node(4);
        tree.root.left.right=new Node(5);
        tree.root.right.right =new Node(7);
        tree.root.right.left =new Node(6);
        tree.PreOrderTraversal(tree.root);
        System.out.println("-------------------------");
        tree.InOrderTraversal(tree.root);
        System.out.println("---------------------------");
        tree.PostOrderTraversal(tree.root);
        System.out.println("---------------------------");
        ArrayList<Integer> list;
        list=tree.InOrderNonRecursive(tree.root);
        for(Integer x : list){
            System.out.println(x);
        } 

    }

}
