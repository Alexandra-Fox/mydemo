var mouse = {
    x: 0,
    y: 0,
};

var selected = false;

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background = '#ffffff';
context.fillStyle = '#000000';
context.strokeStyle = '#000000';
context.lineWidth = 3;

var Triangle = function(...points) {
    this.points = points
}

Triangle.prototype = {
    draw() {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(100, 120);
        context.lineTo(150, 50);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
        context.strokeStyle = "blue";
        context.stroke();
        /* context.beginPath();
         context.moveTo(0, 0);
         this.points.forEach(n => context.lineTo(n.x, n.y));
         context.fill();*/
    },
    mouseIn() {
        return PointInTriangle(mouse, ...this.points)
    }
};

var Circle = function(...points) {
        this.points = points;
    }
    /*var Rect = function(...points) {
        this.points = points
    }*/
Circle.prototype = {
        draw() {
            context.beginPath();
            context.arc(150, 75, 10, 0, Math.PI * 2, false);
            context.fillStyle = '#0f0';
            context.fill();
            context.closePath();
            context.strokeStyle = '#0f0';
            context.stroke();
        }
    }
    /*
    Rect.prototype = {
        draw() {
            ctx.fillRect(this.points[0].x, this.points[0].y, this.points[1].x - this.points[0].x, this.points[1].y - this.points[0].y)
        },
        mouseIn() {
            return (
                mouse.x >= this.points[0].x && mouse.x <= this.points[1].x &&
                mouse.y >= this.points[0].y && mouse.y <= this.points[1].y
            )
        }
    }*/

var shapes = [
    new Triangle(),
    new Triangle(),
    new Circle()
]

shapes.forEach(n => n.draw())

window.onmousemove = function(e) {
    mouse.x = e.pageX - canvas.offsetLeft;
    mouse.y = e.pageY - canvas.offsetTop;

    if (selected) {
        selected.points.forEach(n => {
            n.x += e.movementX
            n.y += e.movementY
        })

        context.clearRect(0, 0, canvas.width, canvas.height)
        shapes.forEach(n => n.draw())
    }
};

window.onmousedown = function() {
    if (!selected) {
        shapes.forEach(n => {
            if (n.mouseIn(mouse)) {
                selected = n
            }
        })
    }
};

window.onmouseup = function() {
    selected = null;
};

function sign(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function PointInTriangle(pt, v1, v2, v3) {
    var
        b1 = sign(pt, v1, v2) < 0,
        b2 = sign(pt, v2, v3) < 0,
        b3 = sign(pt, v3, v1) < 0;

    return ((b1 == b2) && (b2 == b3));
}