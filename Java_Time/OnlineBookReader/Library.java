
import java.util.HashMap;

public class Library {
    private HashMap<Integer, Book> books;

    public boolean addBook(int id, String details) {
        if (books.containsKey(id)) {
            return false;

        }
        Book book = new Book(id, details);
        books.put(id, book);
        return true;
    }

    public boolean removeBook(Book b) {
        Book b1 = books.remove(b.getId());
        if (b1 != null) {
            return true;
        } else {
            return false;
        }
    }

    public Book find(int id) {
        return books.get(id);
    }
}