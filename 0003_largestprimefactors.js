/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var myNum = 600851475143

function findFactors(num) {
  var factors = []
  for(var i=2; i<num; i++) {
    if(num%i === 0) {
      factors.push(i)
    }
  }
  return factors
}

function isItPrime(num) {
  if(num%2 === 0) { return false }  
  for(var i=3; i<num; i+=2) {
    if(num%i === 0) {
      return false
    }
  }
  return true
}

function findBiggestPrime(num) {
  factors = findFactors(num)
  factors.reverse()
  console.log("factors: " + factors)
  
  for(var i = 0; i<factors.length; i++) {
    if(isItPrime(factors[i])) {
      return factors[i]
    }
  }
  
  return false
}

//console.log(isItPrime(myNum))
//console.log(findFactors(myNum))
console.log(findBiggestPrime(myNum))

//answer: 6857