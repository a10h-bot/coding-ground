/*
 * You are given a pointer to the root of a binary search tree and values to be
 * inserted into the tree. Insert the values into their appropriate position in
 * the binary search tree and return the root of the updated binary tree. You
 * just have to complete the function.
 */
class Node {
    int data;
    Node left, right;

    public Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class InsertInBSt {
    Node root;

    public InsertInBSt() {
        root = null;
    }

    public void printInPreOrder(Node root) {
        if (root != null) {
            System.out.println(root.data);
            printInPreOrder(root.left);
            printInPreOrder(root.right);
        }
    }

    public Node insert(Node root, int val) {
        if (root == null) {
            root = new Node(val);
            return root;
        }

        if (root.data < val) {
            root.right = insert(root.right, val);
        }

        if (root.data > val) {
            root.left = insert(root.left, val);
        }

        return root;
    }

    public static void main(String[] args) {
        InsertInBSt bst = new InsertInBSt();
        Node root = new Node(5);
        bst.insert(root, 4);
        bst.insert(root, 8);
        bst.insert(root, 10);
        bst.insert(root, 2);

        bst.insert(root, 80);
        bst.printInPreOrder(root);
    }
}