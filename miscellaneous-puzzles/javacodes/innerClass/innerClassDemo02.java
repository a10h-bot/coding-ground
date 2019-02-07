//2) Method Local inner classes

class innerClassDemo02 {
    protected void printName() {
        System.out.println("hello ! I am from outer class !!");
        String myName = "Geeky";
        int x = 9;
        class innermost {
            void innerMethod() {
                System.out.println("hello ! I am from Inner class  !!");
                System.out.println(myName + " " + x);
            }
        }
        innermost inrmst = new innermost();
        inrmst.innerMethod();

    }

    public static void main(String[] args) {
        innerClassDemo02 x = new innerClassDemo02();
        x.printName();

    }
}
