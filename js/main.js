var time = setInterval(function () {
    var date = new Date();
    document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}, 1000);

var canvas = document.querySelector('#canv');
var ctx = canvas.getContext('2d');

var xCoord = document.getElementById('xCoord');
var yCoord = document.getElementById('yCoord');

var getCoordinates = function (evt) {
    let arr = {};
    let x = evt.offsetX;
    let y = evt.offsetY;

    xCoord.innerText = x;
    yCoord.innerText = y;
};


var draw = function (evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillRect(xCoord.innerText, yCoord.innerText, 10, 10);
    }
};
var startDwaw = function (evt) {
    draw(evt);
};

var endDwaw = function (evt) {
    canvas.onmousemove = null;
};

canvas.addEventListener('mousemove', getCoordinates);
canvas.addEventListener('mousedown', startDwaw);
canvas.addEventListener('mouseup', endDwaw);
//window.addEventListener('click', clicker);
