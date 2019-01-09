class node {
    constructor(x, next = null) {
        this.x = x;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }
    insert(value) {
        if (this.head === null) {
            this.head = new node(value);
        } else {
            let newNode = new node(value);
            let ptr = this.head;
            while (ptr.next !== null) {
                ptr = ptr.next;
            }
            ptr.next = newNode;
        }
    }
}

let n = new LinkedList();
n.insert(5);
n.insert(7);
n.insert(8);
console.log(n);