// Write a function that expects an array of integers and returns an array of pairs with the indexes of two numbers that sum 0.
// Do not repeat the pair again in the solution.

function zeroSum(array) {
  var result = [];
  for (var firstNum = 0; firstNum < array.length; firstNum++) {
    //console.log("checkpoint 1");
    for (var i = firstNum+1; i < array.length; i++) {
      //console.log("checkpoint 2");
      if (array[firstNum] + array[i] == 0) {
        result.push([firstNum, i]);
        //console.log("gefunden");
      }
    }
  }
  return result;
}

console.log(zeroSum([1, 5, 0, -5, 3, -1])); // => [[0, 5], [1, 3]]
console.log(zeroSum([1, -1])); // => [[0, 1]]
console.log(zeroSum([0, 4, 3, 5])); // => []
