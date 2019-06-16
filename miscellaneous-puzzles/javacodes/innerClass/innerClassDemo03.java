//static nested classes

class outer2 {
    void print() {
        System.out.println("hello !!");
    }

    static class innrclass {
        void printSomthing() {
            System.out.println("I am from inner class");
        }
    }
}

public class innerClassDemo03 {
    public static void main(String[] args) {
        outer2 inst = new outer2();
        inst.print();

    }
}