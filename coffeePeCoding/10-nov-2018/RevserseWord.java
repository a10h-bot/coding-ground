//input : "the sky is blue" 
//output : "blue is  sky the "
/* public class RevserseWord {
    public static void main(String[] args) {
        String input = "the sky is blue";
        String output = "";
        String[] A = input.split(" ");
        for (int i = A.length - 1; i >= 0; i--) {
            output += A[i] + " ";
        }
        System.out.println(output);
    }
}
*/
//input : "the sky is blue" 
// output : "eht yks si eulb"

/* public class RevserseWord {
    public static void main(String[] args) {
        String input = "the sky is blue";
        String output = "";
        String[] A = input.split(" ");
        for (int i = 0; i < A.length; i++) {
            String temp = A[i];
            String res = "";
            for (int j = temp.length() - 1; j >= 0; j--) {
                res += temp.charAt(j);
            }
            output += res + " ";
        }
        System.out.println(output);
    }
}
*/
// input : "hello"
//output : " olleh"

public class RevserseWord {
    public static void main(String[] args) {
        String s = "Hello";
        String res = "";
        char[] charArray = s.toCharArray();
        for (int i = charArray.length - 1; i >= 0; i--) {
            res += charArray[i];
        }
        System.out.println(res);
        System.out.println(s.hashCode());
        String s2 = "Hello";
        String s3 = new String("Hello");
        System.out.println(s == s2);
        System.out.println(s3 == s2);
    }
}