var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// 0-23
var had = 3
var hours = []

// 0-60
var mad = 4
var minutes = []

var sad = 5
var seconds = []

for( h=0; h<had; h++) {
	console.log('HOURS', h)
	hours.push(h)
	for( m=0; m<mad; m++) {
		console.log('minutes', m)
		minutes.push(m)
		for( s=0; s<sad; s++) {
			seconds.push(s)
			console.log('s', s)
		}
	}
}

console.log(hours)
console.log(minutes)
console.log(seconds)
console.log(seconds.length)