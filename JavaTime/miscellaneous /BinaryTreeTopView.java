import java.util.LinkedList;
import java.util.Queue;
import java.util.TreeMap;
import java.util.Map.Entry;
import java.util.Map;

class Node {
    int data;
    Node left, right;

    public Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTreeTopView {
    Node root;

    public BinaryTreeTopView() {
        root = null;
    }

    private void printTopView(Node root) {
        class Queueobj {
            Node node;
            int hd;

            public Queueobj(Node node, int hd) {
                this.node = node;
                this.hd = hd;
            }

        }
        Queue<Queueobj> q = new LinkedList<Queueobj>();
        Map<Integer, Node> topViewMap = new TreeMap<Integer, Node>();
        if (root == null) {
            return;
        } else {
            q.add(new Queueobj(root, 0));
        }
        while (!q.isEmpty()) {
            Queueobj tempNode = q.poll();
            if (!topViewMap.containsKey(tempNode.hd)) {
                topViewMap.put(tempNode.hd, tempNode.node);
            }
            if (tempNode.node.left != null) {
                q.add(new Queueobj(tempNode.node.left, tempNode.hd - 1));
            }
            if (tempNode.node.right != null) {
                q.add(new Queueobj(tempNode.node.right, tempNode.hd + 1));
            }
        }
        for (Entry<Integer, Node> entry : topViewMap.entrySet()) {
            System.out.println(entry.getValue().data);
        }
    }

    public static void main(String[] args) {
        BinaryTreeTopView treeTop = new BinaryTreeTopView();
        treeTop.root = new Node(1);
        treeTop.root.left = new Node(2);
        treeTop.root.right = new Node(3);
        treeTop.root.left.right = new Node(4);
        treeTop.root.left.right.right = new Node(5);
        treeTop.root.left.right.right.right = new Node(6);
        treeTop.printTopView(treeTop.root);

    }
}