/*
Smallest multiple
Problem 5 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/


var topNum = 20

function testDivisors(num) {
	for(var i=2; i<=topNum; i++) {
        	if(num%i !== 0) {
			return false
		}
	}
	return true
}


function findSmallestMultiple(num) {
  var result = false
  var ans = num*iterator
  var iterator = 1
  while(result === false) {
    ans = num*iterator
    result = testDivisors(ans)
    iterator++
  }
  return ans
}

console.log(findSmallestMultiple(topNum))

// 232792560