abstract class Base {
    Base() {
        System.out.println("Base Constructor Called");
    }

    abstract void fun();
}

class Derived extends Base {
    Derived() {
        System.out.println("Derived Constructor Called");
    }

    void fun() {
        System.out.println("Derived fun() called");
    }

    void sayHi() {
        System.out.println("hello bro !");
    }
}

public class main {
    public static void main(String args[]) {
        Derived b = new Derived();
        b.fun();
        b.sayHi();
    }
}