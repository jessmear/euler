/*
Special Pythagorean triplet
Problem 9 
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// find pythagorean triples < 1000
// find which one adds to 1000
// find the product abc



function findPythagoreanTriplets(max) {
	var perfectSquares = []
	var trips = []
	var sum = 0

	for(var i=1; i<=max; i++) {
		perfectSquares.push(i*i)
	}

	for(var a=0; a<perfectSquares.length; a++) {
		for(var b=1; b<perfectSquares.length; b++) {
			for(var c=2; c<perfectSquares.length; c++) {
				if(a<b && b<c) {
					var numA = perfectSquares[a]
					var numB = perfectSquares[b]
					var numC = perfectSquares[c]
					var rtA = Math.sqrt(perfectSquares[a])
					var rtB = Math.sqrt(perfectSquares[b])
					var rtC = Math.sqrt(perfectSquares[c])
					if((numA + numB === numC) && (rtA+rtB+rtC === 1000)) {
						trips.push(numA + " + " + numB + "===" + numC)
						console.log(rtA,rtB,rtC)
						console.log(rtA*rtB*rtC)
					}
				}
			}
		}
	}
	return trips
}


console.log(findPythagoreanTriplets(1000))

// 200 375 425
// 31875000
// [ '40000 + 140625===180625' ]