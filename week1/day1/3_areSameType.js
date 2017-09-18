// Create a function that checks whether all the element of an array are the same datatype

// For example, whether they are all a String or a number.

function whatType(myVar) {
  if(Array.isArray(myVar)) {
    return 'array';
  } else {
    return typeof myVar;
  }
}

function areSameType(myArray) {
  var typeOfFirst = whatType(myArray[0]);
  //console.log("The type of the first element is " + typeOfFirst);
  for(var key in myArray) {
    if (whatType(myArray[key]) != typeOfFirst) {
      return false;
    }
  }
  return true;
}


console.log(areSameType(['hello', 'world', 'long sentence'])); // => true
console.log(areSameType([1, 2, 9, 10])); // => true
console.log(areSameType([['hello'], 'hello', ['bye']])); // => false
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]])); // => true
