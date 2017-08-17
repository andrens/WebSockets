var start = true;
function paint() {
  canvas.addEventListener('mousedown', function(e) {
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
      start = false;
      canvas.addEventListener('mousemove', onPaint, false);
  }, false);

  canvas.addEventListener('mouseup', function() {
      canvas.removeEventListener('mousemove', onPaint, false);
  }, false);
   
  var onPaint = function() {
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
      sendData();
  };  
}

function autoPaint(data) {
	if(start==false){ctx.beginPath();}
	start = true;
	ctx.lineTo(data.x, data.y);
    ctx.stroke();
}

function sendData() {
	console.log("Sending : " + mouse.x + ", " + mouse.y);

	var data = {
		x: mouse.x,
		y: mouse.y
	}
	socket.emit('mouse', data);
}