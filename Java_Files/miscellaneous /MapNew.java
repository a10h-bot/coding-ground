import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class MapNew {
    public static void main(String[] args) {
        var map = new HashMap<Integer, String>();
        map.put(3, "David");
        map.put(4, "Rahul");
        System.out.println(map);
        var map2 = Map.of(new Integer(3), new StringBuilder("Sachin"));
        var map3 = Map.of(5, "Hello", 6, "World");
        System.out.println(map3);
        System.out.println(map2);
        Set<Integer> set = new HashSet<Integer>();
        set = map3.keySet();
        System.out.println(set);

    }
}