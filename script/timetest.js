var atm = new Date()

var dmy = atm.getDate() + ':' + atm.getMonth()+1 + ':' + atm.getFullYear()
var timeOnly = atm.getHours() + ':' + atm.getMinutes() + ':' + atm.getSeconds()

var hours = atm.getHours()
var minutes = atm.getMinutes()
var seconds = atm.getSeconds()

function timeToFormat(t) {
	if(t<10) {
		t = '0' + t.toString()
	}
	return t
}

var vremya = timeToFormat(hours) + ':' + timeToFormat(minutes) + ':' + timeToFormat(seconds)

console.log(vremya)

console.log(timeOnly)
console.log(typeof atm.getSeconds().toString())
console.log(atm.getSeconds().toString().length)


console.log(atm.getTime())

