import java.util.HashMap;

class UserManager {
    private HashMap<Integer, User> users;

    public User addUser(int id, String details, int AccountType) {
        if (users.containsKey(id)) {
            return null;
        }
        User user = new User(id, details, AccountType);
        users.put(id, user);
        return user;

    }

    public User find(int id) {
        User usr = users.get(id);
        return usr;
    }

    public boolean removeUser(User u) {
        User us = users.remove(u.getUserId());
        if (us == null) {
            return false;
        } else {
            return true;
        }
    }
}