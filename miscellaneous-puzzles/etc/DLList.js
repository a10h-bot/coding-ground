class node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DLList {
  constructor() {
    this.head = null;
  }
  addAtBegin(data) {
    let newNode = new node(data);
    if (this.head === null) {
      this.head = newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let n = new DLList();
n.addAtBegin('JS');
n.addAtBegin('C++');
n.addAtBegin('Java');
n.printList();