import java.util.Arrays;

class wordRevers {
    public static void main(String[] args) {
        // char[] message = { 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ',
        // 's', 't', 'e', 'a', 'l' };
        char[] x = "aftbde".toCharArray();
        Arrays.sort(x);
        char[] message = "the cat ate the rat".toCharArray();
        String str = new String(message);
        if (str.length() == 1) {
            System.out.println(str);
        }
        String[] strArray = str.split(" ");
        String output = " ";
        for (int i = strArray.length - 1; i >= 0; i--) {
            output += strArray[i] + " ";

        }
        System.out.println(output);
        System.out.println(x);
    }

}

// prints: "steal pound cake"