/*
Lattice paths
Problem 15 
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

var latticeSize = 20

var numPaths = 0

function findPath(size) { 
  var num = 0
  var currentRow = []
  var above = []
  for(var i=0; i<size; i++) {
    above.push(1)
  }
  
  for(var rowCount=0; rowCount<size; rowCount++) {
    var left = 1
    for(var colCount=0; colCount<size; colCount++) {
      num = left + above[colCount]
      left = num
      currentRow.push(num)
    }
    above = currentRow
    currentRow = []
  }
  return num
}

console.log(findPath(latticeSize))

// correct answer 137846528820
