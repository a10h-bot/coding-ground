
public class TestMiddle {

    Node head;

    class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }

    }

    public void printMiddle() {
        Node fast_ptr = head;
        Node slow_ptr = head;
        if (head != null) {
            while (fast_ptr != null && fast_ptr.next != null) {
                fast_ptr = fast_ptr.next.next;
                slow_ptr = slow_ptr.next;
            }
            System.out.println("Middle Elment of list is " + slow_ptr.data);

        }
    }

    public void InsertValueInList(int data) {
        if (head == null) {
            head = new Node(data);
        }

        else if (head.next == null) {
            head.next = new Node(data);
        } else {
            Node neWNode = new Node(data);
            Node ptr = head;
            while (ptr.next != null) {
                ptr = ptr.next;
            }
            ptr.next = neWNode;
        }
    }

    public void printList() {
        Node ref = head;
        while (ref != null) {
            System.out.println(ref.data);
            ref = ref.next;
        }
    }

    public static void main(String[] args) {
        TestMiddle list = new TestMiddle();
        for (int i = 1; i < 7; i++) {
            list.InsertValueInList(i);
        }

        list.printList();
        list.printMiddle();

    }
}
