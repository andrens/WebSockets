var socket;

function setup() {
	createCanvas(600,400);
	background(51);

	socket = io.connect('http://localhost:3000');
}

function draw() {
	var x;
	var y;
	canvas.addEventListener('click', function(e) {
		x = mouseX;
		y = mouseY;
	});
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 15, 15);
}