import LinkedListNode from "./LinkedListNode";
import Comparator from "../../utils/comparator/Comparator";
class LinkedList {
  constructor(comparatorFunction) {
    this.head = head;
    this.next = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    let node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
    }
    node.next = head;
    node = head;
  }
}
