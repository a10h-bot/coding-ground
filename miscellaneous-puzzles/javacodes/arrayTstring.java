import java.util.Arrays;

class A {
    int[] m1() {
        return new int[] { 2, 7, 8, 9 };
    }
}

public class arrayTstring {
    public static void main(String[] args) {

        int[] x = new int[] { 4, 7, 8, 1, 9 };
        System.out.println(Arrays.toString(x));
        System.out.println(Arrays.toString(new A().m1()));
    }
}
