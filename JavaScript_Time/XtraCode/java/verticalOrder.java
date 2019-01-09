import java.util.ArrayList;
import java.util.TreeMap;

public class verticalOrder {
    TreeMap<Integer, ArrayList> ht = new TreeMap<>();
    ArrayList<Integer> al;

    public void vertical(Node root, int level) {
        if (root == null) {
            return;
        }
        if(ht.containsKey(level){
            ArrayList x = ht.get(level);
            x.add(root.data);
            ht.put(level, x);
        }
        else{
            al= new ArrayList<Integer>();
            
        }
    }

    public static void main(String[] args) {
        Node root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);
        verticalOrder p = new verticalOrder();
        p.vertical(root, 0);

    }
}

class Node {
    int data;
    Node left, right;

    public Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}