public class myArrayStack {
    private int[] buckets;
    private int top = 0;;
    // private int size;

    public myArrayStack(int n) {
        buckets = new int[n];
    }

    public void add(int val) {

        buckets[top++] = val;

    }

    public void remove() {
        int x = buckets[top];
        System.out.println("removed value is :" + x);
    }

    public void print() {
        for (int each : this.buckets) {
            System.out.println(each);
        }
    }

    public boolean isBucketImpty() {
        boolean b = false;
        for (int each : this.buckets) {
            if (each == 0)
                b = true;
        }
        return b;
    }

    public static void main(String[] args) {
        myArrayStack stack = new myArrayStack(12);
        try {
            for (int i = 1; i <= 10; i++) {
                stack.add(i);
            }
            stack.print();
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Exception accured ");
        }
        // System.out.println(stack.isBucketImpty());
        stack.add(11);
        stack.remove();
    }
}