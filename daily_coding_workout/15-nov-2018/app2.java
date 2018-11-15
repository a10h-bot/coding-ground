import java.util.Map;
import java.util.TreeMap;

public class app2 {
    public static void main(String[] args) {
        Map<String, Integer> map = new TreeMap<>();
        map.put("david", 25);
        map.put("bob", 30);
        map.put("bob", 35);
        System.out.println(map);

    }

}