class Book {
    private int bookId;
    private String details;

    public Book(int id, String det) {
        bookId = id;
        details = det;
    }

    public Integer getId() {
        return bookId;
    }

    public void setId(int id) {
        bookId = id;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String det) {
        details = det;
    }
}