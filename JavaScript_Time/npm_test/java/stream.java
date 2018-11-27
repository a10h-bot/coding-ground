import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class stream {
    public static void main(String[] args) {
        IntStream.range(1, 10).skip(4).forEach(x -> System.out.print(x));
        int[] array = new int[] { 1, 6, 5, 4, 3, 6 };

        Stream.of(1, 6, 5, 4, 3, 6).sorted().map(x -> x * 2).forEach(x -> System.out.println(x));

        Arrays.stream(array).sorted().map(x -> x + 1).filter(x -> x % 2 == 0).forEach(System.out::println);

    }

}