import java.util.Scanner;

public class reverNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input number  !");
        int n = sc.nextInt();
        int rev = 0;
        while (n > 0) {
            int y = n % 10;
            rev = rev * 10 + y;
            n /= 10;
        }
        System.out.println("Reversed number is :" + rev);
    }
}
