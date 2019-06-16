/*
1) Nested Inner class
2) Method Local inner classes
3) Anonymous inner classes
4) Static nested classes

*/
// nested inner class 
class outer {
    class inner {
        void printMe() {
            System.out.println("Hello I am from inner class !! ");
        }
    }
}

public class innerClassDemo01 {
    public static void main(String[] args) {
        outer.inner in = new outer().new inner();
        in.printMe();
    }

}