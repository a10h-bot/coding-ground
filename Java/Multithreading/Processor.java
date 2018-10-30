import java.util.Scanner;

public class Processor extends Thread {
    private volatile boolean running = true;

    public void run() {
        while (running) {
            System.out.println("Hello" + "");

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }
    }

    public void shutDown() {
        running = false;
    }

    public static void main(String[] Strings) {
        Processor proc1 = new Processor();
        proc1.start();
        System.out.println("Press enter to shutdown");
        Scanner sc = new Scanner(System.in);
        sc.nextLine();
        proc1.shutDown();
    }
}
