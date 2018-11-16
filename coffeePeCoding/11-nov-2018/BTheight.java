public class BTheight {
    BTNode root;

    public BTheight() {
        root = null;
    }

    class BTNode {
        int data;
        BTNode left, right;

        public BTNode(int data) {
            this.data = data;
            left = right = null;
        }
    }

    public int findHeightOfBTree(BTNode root) {
        if (root == null) {
            return 0;
        } else {
            int leftHeight = findHeightOfBTree(root.left);
            int rightHeight = findHeightOfBTree(root.right);
            if (leftHeight > rightHeight) {
                return 1 + leftHeight;
            } else {
                return 1 + rightHeight;
            }
        }
    }

}
