const circle = document.querySelector(`.circle`);
const triangle = document.querySelector(`.triangle`);
width = window.innerWidth;
height = window.innerHeight;
//var elem = e.target;
circle.onmousedown = function(e) {

    var coords = getCoords(circle);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    circle.style.position = 'absolute';
    document.body.appendChild(circle);
    moveAt(e);

    circle.style.zIndex = 1000;

    function moveAt(e) {
        circle.style.left = e.pageX - shiftX + 'px';
        circle.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    circle.onmouseup = function() {
        document.onmousemove = null;
        circle.onmouseup = null;
    };

    circle.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}

/*circle.onmousedown = function(event) {

    var coords = getCoords(circle);
    console.log(coords);
    var shiftX = event.clientX - coords.left;
    var shiftY = event.clientY - coords.top;

    circle.style.position = 'absolute';
    circle.style.zIndex = 1000;
    document.body.append(circle);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        circle.style.left = pageX - shiftX + 'px';
        circle.style.top = pageY - shiftY + 'px';
        return circle;
    }

    function onmousemove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onmousemove);
    /* document.onmousemove = function(e) {
         moveAt(e);
     }
circle.onmouseup = function() {
        document.removeEventListener('mousemove', onmousemove);
        circle.onmouseup = null;
    }
    /*circle.onmouseup = function() {
        document.onmousemove = null;
        circle.onmouseup = null;
    }*/
//} 

triangle.onmousedown = function(e) {

    var coords = getCoords(triangle);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    triangle.style.position = 'absolute';
    document.body.appendChild(triangle);
    moveAt(e);

    //triangle.style.zIndex = 1000;

    function moveAt(e) {
        triangle.style.left = e.pageX - shiftX + 'px';
        triangle.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    }

    triangle.onmouseup = function() {
        document.onmousemove = null;
        triangle.onmouseup = null;
    }
}

circle.ondragstart = function() {
    return false;
};

circle.addEventListener('dragover', function() {
    event.preventDefault();
});

triangle.ondragstart = function() {
    return false;
};

triangle.addEventListener('dragover', function() {
    event.preventDefault();
});

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}