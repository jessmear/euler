/*
Largest palindrome product
Problem 4 
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function findPalindromes() {
  var rangeBot = 100
  var rangeTop = 999
  var result = 0
  var check = 0
  var palindrome = 0
  var sentence = ""
  
  for(var i=rangeBot; i<=rangeTop; i++) {
    for(var j=rangeBot; j<=rangeTop; j++) {
      result = (i*j) + ""
      check = result.split("").reverse().join("")
            
      if(result === check) { 
        result = 1*result
        if(result > palindrome) {
          palindrome = result
          sentence = i + " * " + j + " = " + result
        }
      } 
    }
  }
  return sentence
}


console.log(findPalindromes())

// 913 * 993 = 906609
