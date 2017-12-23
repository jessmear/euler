/*
10,001st prime
Problem 7 
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function isItPrime(num) {
  if(num%2 === 0 ) { return false }  
  for(var i=3; i<num; i+=2) {
    if(num%i === 0) {
      return false
    }
  }
  return true
}

var n = 10001

function findNthPrime(n) {
  	var count = 1
  	var natNum = 3
  	while(count<n) {
  		if(isItPrime(natNum)) {
  			count++
  			console.log(natNum + " is the number " + count + " prime.")
  			if(count === n) {
  				return natNum
  			}
  		}
  		natNum++
  	}
}

console.log(findNthPrime(n))

//104743 is the number 10001 prime.
