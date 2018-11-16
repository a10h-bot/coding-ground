
/*const ListEmpty ="ListisEmpty";
class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  }
  
  class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
const getFirst = function() {
    const first = this.head;
    if(first === null) throw ListEmpty;
  
    return first.data;
  };
  const add = function(value) {
    const node = new Node(value);
    this.length += 1;
    if (this.head === null) {
      this.head = node;
    } else {
      let ptr = this.head;
      while (ptr.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = node;
    }
  };
  let list = new SinglyLinkedList();
  SinglyLinkedList.prototype.getFirst=getFirst;
  SinglyLinkedList.prototype.add=add;
  list.getFirst();
  list.add(5);
  list.add(8);
  console.log(list);
  */

 export default (list) => {
    const listLength = list.length;
    let swapped, noOfSortedItems = 0;
    do {
      swapped = false;
      for (let i = 0; i < listLength - noOfSortedItems - 1; i++) {
        if (list[i] > list[i+1]) {
          [ list[i], list[i+1] ] = [ list[i+1], list[i] ];
          swapped = true;
        }
      }
      noOfSortedItems += 1;
    } while (swapped === true);
    return list;
  }
  list = [2,4,8,9]
  console.log(list);
  