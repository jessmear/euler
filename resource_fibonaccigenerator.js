/*
Fibonacci numbers
*/

function fibo(limit) {
    var a = 1
    var b = 1
    var fibList = []
    while(b<=limit) {
      b = a+b;
      a = b-a;
      fibList.push(a)
    }
    return fibList
}

console.log(fibo(89))

function fiboSum(limit) {
  var a = 1
  var b = 1
  var sum = 0
  while(b<=limit) {
    b = a+b;
    a = b-a;
    sum +=a;
    //console.log("a: " + a + "  b: " + b)
  }
  return sum
}
