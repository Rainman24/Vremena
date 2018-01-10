// Spinning on keyup,down,left,right Function

(function () {
	var rotateY = 0,
		  rotateX = 0;

	document.onkeydown = function (e) {
			   if (e.keyCode === 37) rotateY -= 4
		else if (e.keyCode === 38) rotateX += 4
		else if (e.keyCode === 39) rotateY += 4
		else if (e.keyCode === 40) rotateX -= 4

		document.querySelector('.rect').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
})();

var refresh = setInterval(timeTo, 1000)

function timeTo() {
	var now = new Date()
	document.getElementById('display').innerHTML = now.toLocaleTimeString()
}