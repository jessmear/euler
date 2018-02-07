
// function collatz(num) {
// 	console.log(num)
// 	num = (isOdd(num) ? (3*num)+1 : num/2)
// 	if(num>1){ collatz(num) }
// 	num===1 ? console.log(num) : ''
// }

var chainCount = 0
var chainNum = 0
var count = 1

function collatz(num) {
	count++
	num = (isOdd(num) ? (3*num)+1 : num/2)
	if(num>1){ collatz(num) }
    return count
}

function isOdd(num) {
	return num%2===0 ? false : true
}


for(var i=1; i<1000000; i++) {
	collatz(i)
	if(count > chainCount) { 
		chainCount = count 
		chainNum = i
	}
	count = 1
}
console.log(chainNum, chainCount)

// answer: 837799 with a chain of 525
