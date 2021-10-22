//Point constructor
function Point(x, y) {
  this.x = x;
  this.y = y;
}

//Circle constructor
function Circle(x, y, r) {
  Point.call(this, x, y);
  this.r = r;
}

//Rectangle constructor
function Rectangle(x, y, a, b) {
  Point.call(this, x, y);
  this.a = a;
  this.b = b;
}

//Prism constructor
function Prism(x, y, a, b, c) {
  Rectangle.call(this, x, y, a, b);
  this.c = c;
}

//Point methods
Point.prototype.getDistance = function (point2) {
  let dist = Math.sqrt((point2.x - this.x) ** 2 + (point2.y - this.y) ** 2);
  return dist;
};

//Circle methods
Circle.prototype = Point.prototype;
Circle.prototype.intersects = function (circle2) {
  let p2 = new Point(circle2.x, circle2.y);
  let dist = this.getDistance(p2);
  return dist < (this.r + circle2.r) ** 2;
};
Circle.prototype.getCircumference = function () {
  return 2 * Math.PI * this.r;
};
Circle.prototype.getArea = function () {
  return Math.PI * (this.r * this.r);
};

//Rectangle methods
Rectangle.prototype = Point.prototype;
Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.a + this.b);
};
Rectangle.prototype.getArea = function () {
  return this.a * this.b;
};
Rectangle.prototype.getLengthOfDiagonals = function () {
  let result = [];
  let d = Math.sqrt(this.a ** 2 + this.b ** 2);
  result.push(d);
  result.push(d);
  return result;
};
Rectangle.prototype.getBiggestCircle = function () {
  let center = new Point(this.x + this.a / 2, this.y + this.b / 2);
  let radius = Math.min(this.a, this.b) / 2;
  return new Circle(center.x, center.y, radius);
};

//Prism methods
Prism.prototype = Rectangle.prototype;
Prism.prototype.getVolume = function () {
  let rectangleArea = this.getArea();
  return rectangleArea * this.c;
};

//testing zone------(MAIN)-------------------
let p1 = new Point(2, 3);
let p2 = new Point(2, 5);
let circ1 = new Circle(p1.x, p1.y, 0.5);
let circ2 = new Circle(p2.x, p2.y, 4);
let rect = new Rectangle(0, 0, 5, 4);
let biggestCircle = rect.getBiggestCircle();
let prism = new Prism(rect.x, rect.y, rect.a, rect.b, 4);
console.log(prism.getVolume());