import java.util.*;
import java.util.ArrayList;
import java.util.List;

public class QueueCustom {
    private List<Integer> list = new ArrayList<Integer>();

    QueueCustom() {
        list = new ArrayList<>();

    }

    void addElement(Integer element) {
        list.add(element);
        System.out.println("Element added !");
    }

    void printList() {
        for (int a : list) {
            System.out.println(a);
        }
    }

    void removeElement() {

        Integer temp = list.get(0);
        list.remove(temp);
    }

    public static void main(String[] args) {

        QueueCustom myQueue = new QueueCustom();
        myQueue.addElement(7);
        myQueue.addElement(9);
        myQueue.addElement(5);
        myQueue.printList();
        myQueue.removeElement();
        myQueue.printList();

    }
}