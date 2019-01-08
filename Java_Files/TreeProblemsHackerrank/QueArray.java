public class QueArray {
    int front, rear, size;
    int capacity;
    int array[];

    public QueArray(int capacity) {
        this.capacity = capacity;
        front = 0;
        size = 0;
        rear = capacity - 1;
        array = new int[this.capacity];

    }

    public boolean isFull(QueArray que) {
        return que.size == que.capacity;
    }

    public boolean isEmpty(QueArray que) {
        return que.size == 0;
    }

    public void EnQueue(int item) {
        if (isFull(this)) {
            return;

        }

    }

    public static void main(String[] args) {
        QueArray objArray = new QueArray(10);

    }

}