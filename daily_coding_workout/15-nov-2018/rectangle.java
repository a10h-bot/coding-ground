interface Shape {

    public abstract void draw();

    int area(int m, int n);
}

public class rectangle implements Shape {
    private int x;
    private int y;

    public rectangle(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public void draw() {
        System.out.println("----------------------------");
        System.out.println("I am a rectangle !");
    }

    public void show() {
        System.out.println("values from objetcts created  : " + " " + x + " " + y);
    }

    public int area(int x, int y) {
        return x * y;
    }

    public void print() {
        System.out.println(x + y);
    }

    public static void main(String[] args) {
        new rectangle(8, 9).draw();
        System.out.println(new rectangle(6, 7).area(6, 5));
        rectangle r = new rectangle(4, 5);
        // System.out.println(r);
        r.show();
        Shape ref = new rectangle(7, 8);
        System.out.println(ref.area(7, 10));

    }
}