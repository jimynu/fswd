// Create a function that returns true when the parameter passed is an array and false otherwise.

function isArray(variable) {
  if(Array.isArray(variable)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isArray('hello'); // => false
isArray(['hello']); // => true
isArray([2, {}, 10]); // => true
isArray({ a: 2 }); // => false
