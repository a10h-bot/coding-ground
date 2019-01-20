class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  //add at the beginning of the list
  addFirst(data) {
    let newNode = new node(data);
    if (this.head === null) {
      this.head == newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

  }
  //add data at the end of the list
  addLast(data) {
    let newNode = new node(data);
    if (this.head === null) {
      this.head = newNode;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;

  }
  //add a data at a given position from begining
  addAtPostion(data, k) {
    let newNode = new node(data);
    let temp = this.head;
    let i = 1;
    while (i < k - 1) {
      temp = temp.next;
      i++;
    }
    newNode.next = temp.next;
    temp.next = newNode;


  }
  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  //create a string of list elements
  createAstring() {
    let listElements = [];
    for (let temp = this.head; temp !== null; temp = temp.next) {
      listElements.push(temp.data);
    }
    return listElements.join('')
  }

}

const x = new linkedList()
x.addFirst('hello')
x.addFirst('hey')
x.addFirst('Good')
x.addLast('Bye')
x.addAtPostion("See you", 3)
x.addAtPostion("be", 5)
for (let i = 0; i < 5; i++) {
  x.addLast(i);
}
x.printList()
console.log(x.createAstring());