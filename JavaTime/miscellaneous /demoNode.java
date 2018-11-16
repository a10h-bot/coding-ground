public static class demoNode<T> {
    private T data;
    private demoNode<T> next;

    public demoNode(T data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListTest {
}