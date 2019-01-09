public class BibbleSort {

    public static void swap(int a[], int x, int y) {
        int temp = a[x];
        a[x] = a[y];
        a[y] = temp;

    }

    public static void main(String[] args) {
        int[] inputArray = new int[] { 1, 4, 9, 3, 8 };
        for (int i = 0; i < inputArray.length - 1; i++) {
            for (int j = 1; j < inputArray.length - i; j++) {
                if (inputArray[j - 1] > inputArray[j]) {
                    BibbleSort.swap(inputArray, j, j - 1);
                }
            }
        }
        for (int each : inputArray) {
            System.out.println(each);
        }
    }
}
