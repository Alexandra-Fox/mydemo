'use strict';
/*
let x = prompt('Введи начальную иксу');
let y = prompt('Введи начальную У');
let newX = prompt('Куда по Х сдвинем?');
let newY = prompt('Куда по У сдвинем?');
let radius = prompt('Радиус какой?');
let newRadius = prompt('Увеличим радиус на..');
let a = prompt('Введи а');
let b = prompt('Введи b');
let c = prompt('Введи c'); */

function Shape(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
};
Shape.prototype.toString = function() {
    console.log(`Shape( ${this.id} )`);
    return `Shape(${this.id})`;
};
Shape.prototype.setLocation = function(newX, newY) {
    this.x = +this.x + +newX;
    this.y = +this.y + +newY;
};
Shape.prototype.getLocation = function() {
    console.log(`x:${this.x}, y:${this.y}`);
    return {
        x: this.x,
        y: this.y,
    }
};

function Circle(id, x, y, radius) {
    this.radius = radius;
    Shape.call(this, id, x, y);
    Circle.prototype.toString = function() {
        console.log(`Circle( ${this.id})`);
        return `Circle(${this.id})`;
    };
    Circle.prototype.setDiametr = function(newRadiuse) {
        this.radius = +this.radius + +newRadiuse;
    };
    Circle.prototype.getDiametr = function() {
        console.log(`Diametr( ${this.radius*2})`);
        return this.radius * 2;
    };
};

function Triangle(id, x, y, a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    Shape.call(this, id, x, y);
    Triangle.prototype.toString = function() {
        console.log(`Triangle( ${this.id})`);
        return `Triangle(${this.id})`;
    };

    Triangle.prototype.getHypotenuse = function() {
        if (this.a * this.a === this.b * this.b + this.c * this.c) {
            console.log(`hipotenuse ( ${this.a})`);
            return this.a;
        } else if (this.b * this.b === this.a * this.a + this.c * this.c) {
            console.log(`hipotenuse ( ${this.b})`);
            return this.b;
        } else if (this.c * this.c === this.a * this.a + this.b * this.b) {
            console.log(`hipotenuse ( ${this.c})`);
            return this.b;
        } else {
            console.log("triangle is not try");
        };
    };

    Triangle.prototype.isIsosceles = function() {
        if (this.a === this.b || this.a === this.c || this.b === this.c) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    };
};

Circle.prototype = Object.create(Shape.prototype);
Object.defineProperty(Circle.prototype, 'constructor', {
    value: Circle,
    enumerable: false,
    writable: true
});

Triangle.prototype = Object.create(Shape.prototype);
Object.defineProperty(Triangle.prototype, 'constructor', {
    value: Triangle,
    enumerable: false,
    writable: true
});
/*
const shape = new Shape();
shape.setLocation(5, 5);

Circle.prototype = shape;

const circle = new Circle(2, 4, 4, 10);
circle.toString();
circle.setDiametr(5);
circle.getDiametr();

Triangle.prototype = shape;

const triangle = new Triangle(2, 4, 4, 3, 4, 5);
triangle.toString();
triangle.getHypotenuse();
triangle.isIsosceles();
triangle.getLocation();
*/