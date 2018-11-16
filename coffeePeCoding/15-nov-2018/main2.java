abstract class base {
    abstract void m1();

    public int x = 8;

    public void m2() {
        System.out.println("I am from Base class !");
    }
}

public class main2 extends base {
    public void m1() {
        System.out.println("I am from m1");
    }

    public void m7() {
        System.out.println(++x);
    }

    int y = 9 + x;

    public static void main(String[] args) {
        new main2().m1();
        System.out.println(new main2().y);
        new main2().m7();
    }
}