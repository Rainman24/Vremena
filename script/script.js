// var atm = new Date()

// var dmy = atm.getDate() + ':' + atm.getMonth()+1 + ':' + atm.getFullYear()
// var timeOnly = atm.getHours() + ':' + atm.getMinutes() + ':' + atm.getSeconds()

// var hours = atm.getHours()
// var minutes = atm.getMinutes()
// var seconds = atm.getSeconds()


// function timeToFormat(t) {
// 	if(t<10) {
// 		t = '0' + t.toString()
// 	}
// 	return t
// }

// var vremya = timeToFormat(hours) + ':' + timeToFormat(minutes) + ':' + timeToFormat(seconds)

// var timeDisplay = document.getElementById('display')

// timeDisplay.innerHTML = vremya


// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("display").innerHTML = d.toLocaleTimeString();
// }

var refresh = setInterval(timeTo, 1000)
var refreshS = setInterval(sec, 1000)

// function time() {
// 	var atm = new Date()
// 	document.getElementById('display').innerHTML = atm.toLocaleTimeString()
// }


function timeTo() {
	var now = new Date()
	document.getElementById('display').innerHTML = now.toLocaleTimeString()
}

function sec() {
	var tik = new Date()
	document.getElementById('count').innerHTML = tik.getSeconds()
	document.getElementById('countdown').innerHTML = 60 - tik.getSeconds()
}