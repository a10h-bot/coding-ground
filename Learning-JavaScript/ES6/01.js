class point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add() {
        return this.x + this.y;
    }
}
const p1 = new point(4, 5)
console.log(p1)
console.log(p1.add())
let pointnew = function (x, y) {
    this.x = x
    this.y = y
}
pointnew.prototype.add = function () {
    return this.x + this.y;
}
let p2 = new pointnew(7, 8)
console.log(p2)
console.log(p2.add())

var list = [1, 2, 3]
var [a, , b] = list
    [b, a] = [a, b]
console.log(list);
var list1 = [1, 2, 3];
var a = list[0],
    b = list[2];
var tmp = a;
a = b;
b = tmp;
console.log(list1);
console.log(9, 6);