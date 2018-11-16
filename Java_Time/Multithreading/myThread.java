public class myThread extends Thread {
    public void run() {

        for (int i = 1; i <= 10; i++) {
            System.out.println(i + " ");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }
    }

    public static void main(String[] args) {
        myThread t1 = new myThread();
        myThread t2 = new myThread();
        t1.start();
        t2.start();
    }
}