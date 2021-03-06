var socket;

setup();

function setup() {
	socket = io.connect('http://localhost:3000');
	socket.on('mouse', autoPaint);
}

var canvas      = document.getElementById('myCanvas');
var ctx         = canvas.getContext('2d');
 
var painting    = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
canvas.width    = parseInt(paint_style.getPropertyValue('width'));
canvas.height   = parseInt(paint_style.getPropertyValue('height'));

var mouse       = {x: 0, y: 0};
 
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineWidth   = 3;
ctx.lineJoin    = 'round';
ctx.lineCap     = 'round';
ctx.strokeStyle = '#00CC99';

paint(); 
