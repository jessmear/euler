/*
Summation of primes
Problem 10 
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function isItPrime(num) {
  if(num%2 === 0) { return false }  
  for(var i=3; i<=num/2; i+=2) {
    if(num%i === 0) {
      return false
    }
  }
  return true
}

function sumPrimesBelow(num) {
	var sum = 2;
	//console.log("2 is prime, sum is " + sum)
	for(var i=3; i<=num; i+=2) {
		sum += (isItPrime(i) ? i : 0)
		//console.log( isItPrime(i) ? (i + " is prime, sum is " + sum) : '')

	}
	return sum
}

console.log(sumPrimesBelow(2000000))

// 142913828922