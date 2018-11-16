public class BinaryTreeBFS<T extends Comparable<T>> {
    Node<T> root;

    class Node<T> {
        T data;
        Node<T> left;
        Node<T> right;

        public Node(T data) {
            this.data = data;
            this.left = null;
            this.right = null;

        }
    }

    public Node<T> bfs ()
}