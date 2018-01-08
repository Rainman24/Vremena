var refresh = setInterval(timeTo, 1000)
var refreshS = setInterval(mirror, 1000)

function timeTo() {
	var now = new Date()
	document.getElementById('display').innerHTML = now.toLocaleTimeString()
}

function mirror() {
	var tik = new Date()

	// document.getElementById('h').innerHTML = tik.getHours()
	// document.getElementById('s').innerHTML = tik.getSeconds()
	// document.getElementById('m').innerHTML = tik.getMinutes()

	document.getElementById('cdh').innerHTML = 23 - tik.getHours()
	document.getElementById('cdm').innerHTML = 60 - tik.getMinutes()
	document.getElementById('cds').innerHTML = 60 - tik.getSeconds()
}
