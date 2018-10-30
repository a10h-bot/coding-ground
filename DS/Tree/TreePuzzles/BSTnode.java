public class BSTnode {

    node root;

    public BSTnode() {
        root = null;
    }

    class node {
        int data;
        node left_ptr, right_ptr;

        public node(int data) {
            this.data = data;
            this.left_ptr = null;
            this.right_ptr = null;
        }
    }

    public void insertItem(int item) {
        node newNode = new node(item);
        if (root == null) {
            root = newNode;
        }
        if (item < root.data) {
            insertItem(newNode.left_ptr.data);
        }
        if (item > root.data) {
            insertItem(newNode.right_ptr.data);
        }
    }

    public void printTree() {
        node ref = root;
        while (ref != null) {
            System.out.println(root.data);
            break;

            // printTree();
        }

    }

    public static void main(String[] args) {
        BSTnode n = new BSTnode();
        n.insertItem(5);
        // n.insertItem(8);
        // n.insertItem(10);
        n.printTree();
    }

}