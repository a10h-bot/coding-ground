import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;

public class app {
    static Integer[] array = new Integer[] { 5, 9, 2, 4, 6 };
    static final HashSet<Integer> hset = new HashSet<>(Arrays.asList(array));

    public static void main(String[] args) {
        System.out.println("This is from hasHet table : " + hset);
        Arrays.sort(array);
        System.out.println("This is from array : " + Arrays.toString(array));
        Iterator<Integer> itr = hset.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

    }
}