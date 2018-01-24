/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

function triNums(limit) {
	var triNums = []
	var start = 0
	for(var i=1; i<=limit; i++) {
		start = start + i
		triNums.push(start)
	}
	return triNums
}



function findDivisors(num) {
  var divisors = []
  for(var i=1; i<=num; i++) {
    if(num%i === 0) {
      divisors.push(i)
    }
  }
  var myObj = { 'num': num
  			   ,'divisors': divisors 
  			  }
  return myObj
}


var nums = triNums(100000)

for(var i=0; i<nums.length; i++) {
	console.log(i)
	if(findDivisors(nums[i])['divisors'].length>500) {
		console.log(findDivisors(nums[i])['num'])
		i = nums.length
	} 
}

console.log("fin")

// correct answer 76576500
// RUNS WAY TOO SLOWLY
// TODO: make it faster

// var bigTri = nums[nums.length-1]

// console.log(findDivisors(bigTri)['num'] + " has " + findDivisors(bigTri)['divisors'].length + " divisors")

// 125250 has 32 divisors
// 12502500 has 60 divisors
// 1250025000 has 192 divisors






// function triNums(limit) {
// 	var triNums = []
// 	var start = 1250025000
// 	for(var i=50001; i<=limit; i++) {
// 		start = start + i
// 		triNums.push(start)
// 	}
// 	return triNums
// }
