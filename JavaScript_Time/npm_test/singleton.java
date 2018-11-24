import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

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
        List<Integer> list1 = Arrays.asList(1, 2, 4, 7, 8);
        ArrayList<Integer> list = new ArrayList<>(list1);
        Iterator itr = list.iterator();
        for (Integer a : list) {
            System.out.println(a);
        }
        while (itr.hasNext()) {
            System.out.println(itr.next().toString() + " " + 1);
        }
    }
}
