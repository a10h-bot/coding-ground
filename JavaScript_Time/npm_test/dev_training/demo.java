class particle {
    int x;
    int y;
    int z;

    public particle(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public particle(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;

    }

    void move() {
        System.out.println("Particle is moving");
    }
}

public class demo {
    public static void main(String[] args) {
        particle p = new particle(7, 8, 9);
        // p.move();
        System.out.println(p.z);

    }

}