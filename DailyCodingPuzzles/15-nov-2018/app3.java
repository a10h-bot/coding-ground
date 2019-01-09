class parent {
    public int m1(int x) {
        return x * x;

    }

    public int m1(int x, int y) {
        return x + y;
    }
}

class parent2 extends parent {

    public int m1() {
        System.out.println("Hello from parent 2");
        return 5;

    }
}

public class app3 {
    public static void main(String[] args) {
        System.out.println(new parent().m1(5));
        System.out.println(new parent().m1(8, 9));
        System.out.println(new parent2().m1());
    }
}