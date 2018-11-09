/*You are given a pointer to the root of a binary tree. You need to print the level order traversal of this tree. In level order traversal, we visit the nodes level by level from left to right. You only have to complete the function. For example:

     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4  
For the above tree, the level order traversal is 1 -> 2 -> 5 -> 3 -> 6 -> 4.
*/

class TreeNode {
    int data;
    TreeNode left, right;

    public TreeNode(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

public class levelOrderTraversal {
    TreeNode root;

    public levelOrderTraversal() {
        root = null;
    }

    public void levelOrder(TreeNode root) {

    }
}