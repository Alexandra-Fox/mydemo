const circle = document.querySelector(`.circle`);
const triangle = document.querySelector(`.triangle`);
let elements = [circle, triangle];

function move() {
    let e = event.target;

    //e.style.position = 'absolute';
    e.style.zIndex = 1000;
    document.body.append(e);

    elements[e.id].move(event.pageX, event.pageY, e);

    function onmousemove(event) {
        elements[e.id].move(event.pageX, event.pageY, e);
    }

    document.addEventListener('mousemove', onmousemove);

    e.onmouseup = function() {
        document.removeEventListener('mousemove', onmousemove);
        content.append(e);
        e.onmouseup = null;
    }

    e.ondragstart = function() {
        return false;
    }
}