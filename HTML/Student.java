public class Student implements Comparable<Student> {
    String name;
    int id;

    public Student(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public int compareTo(Student student) {

        return this.getId() - student.id;
    }
}