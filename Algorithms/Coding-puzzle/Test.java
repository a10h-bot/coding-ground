import java.util.LinkedList;
import java.util.Queue;
import java.util.stream.Node;

public class Test {

    public void printInLevel(Node root) {
        Queue<Node> q = new LinkedList<>();
        q.add(root);
        if (!q.isEmpty()) {
            root = q.poll();
            System.out.prinln(root.data);
        } else {
            if (root.left != null) {
                q.add(root.left);

            }
            if (root.right != null) {
                q.add(root.right);
            }

        }
    }
}
