

function fizzBuzz(limit) {
    var total = 0
    for(var i=0; i<limit; i++) {
        if(i%3 === 0 || i%5 === 0) {
            //console.log(i)
            total +=i
        }
    }
    return total
}

console.log(fizzBuzz(1000))
//233168