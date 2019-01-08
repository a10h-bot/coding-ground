
class Display {
    private Book activeBook;
    private User activeUser;
    private int pageNumber = 0;

    public void displayUser(User user) {
        activeUser = user;
        refreshUserName();

    }

    public void displayBook(Book book) {
        activeBook = book;
        refreshTitle();
        refreshDetails();
        resfreshPage();

    }

    public void turnPageForward() {
        pageNumber++;
        refreshPage();
    }

    public void turnPageBackward() {
        pageNumber--;
        refreshPage();

    }

    public void refreshUserName() {

    }

    public void refreshTitle() {

    }

}public void refreshpage(){

}