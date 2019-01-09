
class Node {
    int data;
    Node left;
    Node right;

    public Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

public class isBst {
    Node root;

    public isBst() {
        root = null;
    }

    boolean checkBST(Node root) {
        return checkBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    private boolean checkBST(Node root, int left, int right) {
        if (root == null)
            return true;
        if (root.data >= right || left >= root.data)
            return false;
        return checkBST(root.left, left, root.data) && checkBST(root.right, root.data, right);
    }
}
