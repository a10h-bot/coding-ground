
class Node1 {
    int data;
    Node1 left, right;

    public Node1(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node1 root;

    public BinaryTree() {
        root = null;
    }

    public void preOrder(Node1 root) {
        if (root != null) {
            System.out.println(root.data);
            preOrder(root.left);
            preOrder(root.right);
        }
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();

       /*     /  10 \
          /  8\            12 \
      6       9               15
       
       */
        tree.root = new Node1(10);
        tree.root.right = new Node1(12);
        tree.root.right.right = new Node1(15);
        tree.root.left = new Node1(6);
        tree.root.left.right = new Node1(9);
      
        tree.preOrder(tree.root);
    }
}