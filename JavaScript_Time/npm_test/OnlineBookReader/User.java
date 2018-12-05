public class User {
    private int userId;
    private String details;
    private int AccountType;

    public User(int userId, String details, int accountType) {
        this.userId = userId;
        this.details = details;
        AccountType = accountType;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public int getAccountType() {
        return AccountType;
    }

    public void setAccountType(int accountType) {
        AccountType = accountType;
    }
}