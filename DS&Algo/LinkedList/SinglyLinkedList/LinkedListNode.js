export default class LinkedListNode {
  constructor() {
    this.value = value;
    this.next = next;
  }
  toString(callback) {
    return callback ? callback(this.value) : "${this.value}";
  }
}
