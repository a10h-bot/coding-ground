public class QueArray {
    int front, rear, size;
    int capacity;
    int array[];

    public QueArray(int capacity) {
        this.capacity = capacity;
        front = 0;
        size = 0;
        rear = capacity - 1;
        array = new int[this.capacity];

    }

    public boolean isFull(QueArray que) {
        return que.size == que.capacity;
    }

    public boolean isEmpty(QueArray que) {
        return que.size == 0;
    }

    public void EnQueue(int item) {
        if (isFull(this)) {
            return;

        }

    }

    public static void main(String[] args) {
        QueArray objArray = new QueArray(10);

    }

}

// String => "Bob" , Number = > 89;, boolean => true ,false , Array =>
// [6,8,"Hello"]
// object => { hello : 89, age : 49, noOfStudents : ["bob","Alice","David"]}

// function fun() , const x = function(a,b) ,const x =(a,b) => {}

// constructor(),classes, var t = new clasName(),
/*
 * function demo(Fname,Lname){ this.Fname=Fname; this.Lname =Lname; this.Fname=
 * function(){ return this.Fname + " " + this.Lname; }
 * 
 * var y = new demo("Virat","Kohli"); demo.prototype.add =function(a,b){ return
 * a*b; }
 */ 20 overs => 120 /5  ,10 overs => 100 ,30 overs =>220 /5  3 overs +63 runs 33 overs => 283 /5 in 5, 40 overs