class anagram1 {
    public boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length())
            return false;
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        int[] letters = new int[256];
        for (char c : s1.toCharArray()) {
            letters[c]++;
        }
        for (char c : s2.toCharArray()) {
            letters[c]--;
        }
        for (int i : letters) {
            if (i != 0)
                return false;
        }
        return true;
    }
}

public class Anagram {
    public static void main(String[] args) {
        System.out.println(new anagram1().isAnagram("AnandSingh", "paandsingh"));

    }
}