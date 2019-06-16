class myStack {
  constructor() {
    this.bucket = [];
    this.size = 0;
  }
  add(val) {
    this.bucket.push(val);
    this.size++;
  }
  remove() {
    return this.bucket.pop();
  }
  print() {
    this.bucket.forEach(element => {
      console.log(element);
    });
  }
}

let x = new myStack();
for (let i = 0; i < 10; i++) {
  x.add(i);
}
console.log(x.remove());

x.print();
