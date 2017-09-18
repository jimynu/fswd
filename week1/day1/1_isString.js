// Create a function that returns true when the parameter passed is a string and false otherwise.

function isString(variable) {
  if(typeof variable == 'string') {
    console.log(true);
  } else {
    console.log(false);
  }
}

isString('hello'); // => true
isString(['hello']); // => false
isString('this is a long sentence'); // => true
isString({ a: 2 }); // => false
