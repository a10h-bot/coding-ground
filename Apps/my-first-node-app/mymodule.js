exports.myDate = () => {
  return Date();
};
class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getPointSum() {
    return this.x + this.y;
  }
}
const p = new point(4, 7);
let z = p.getPointSum();
