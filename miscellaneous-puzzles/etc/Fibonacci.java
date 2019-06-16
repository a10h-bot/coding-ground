public class Fibonacci {

  public int CalculateFibonacci(int n) {
    int array[] = new int[n + 1];
    return CalculateFibonacciRecursive(array, n);
  }

  public int CalculateFibonacciRecursive(int[] memoize, int n) {
    if (n < 2)
      return n;

    // if we have already solved this subproblem, simply return the result from the
    // cache
    if (memoize[n] != 0)
      return memoize[n];

    memoize[n] = CalculateFibonacciRecursive(memoize, n - 1) + CalculateFibonacciRecursive(memoize, n - 2);
    return memoize[n];
  }

  public static void main(String[] args) {
    Fibonacci fib = new Fibonacci();
    System.out.println(fib.CalculateFibonacci(8));
  }
}