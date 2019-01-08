
public class singleton {
    private singleton() {
    }

    private static singleton x;

    public static singleton getInstance() {
        if (x == null) {
            x = new singleton();
        }
        return x;
    }

    public static void main(String[] args) {

        singleton i = singleton.getInstance();

    }
}
