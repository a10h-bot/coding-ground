

public class findUniqNum {
  public static void main(String[] args) {
    int[] number = new int[] { 2, 3, 2, 2, 5, 7, 8, 9, 20, 23, 23, 20, 5, 7, 8, 9 };
    System.out.println(" ");
    int result = 0;
    for (int i = 0; i < number.length; i++) {
      result ^= number[i];
    }
    if (result > 0) {
      System.out.println(result);
    }
  }
}
