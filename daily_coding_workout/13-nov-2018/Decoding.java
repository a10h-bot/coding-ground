import java.util.HashMap;

public class Decoding {
    public static void main(String[] args) {
        String input = "AAABBAACCCD";
        Integer count = 1;
        HashMap<Character, Integer> h = new HashMap<>();
        for (int i = 0; i < input.length(); i++) {
            if (h.get(input.charAt(i)) == null) {
                h.put(input.charAt(i), count);
            } else {
                h.put(input.charAt(i), h.get(input.charAt(i)) + 1);
            }
        }

    }
}

// int x = 5;
// 4 bytes : 32 bits

// Integer y = 5;
// 16 bytes : 128 bits