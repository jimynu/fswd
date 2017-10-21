function curry(fn) {
  var array = [];
  var nrOfArgs = fn.length;


  var internal = function(...argms) {
    for (var el of argms) {
      array.push(el);
    }
    if (array.length >= nrOfArgs) {
      // if array is full (all args that fn needs are there) -> call fn with accumulated array
      return fn.apply(this, array);
    } else {
      return internal;
    }
  };
  return internal;
}



// sum(a, b, c, d, e) { a + b + c + d + e; }    –>    curry(sum)    –>     curriedSum()

var sum = function(a, b, c, d, e) { return a + b + c + d + e; };
// console.log(sum(1,1,1,2,3));
var curriedSum = curry(sum);
var partial = curriedSum(7, 3, 4);
console.log(partial(1, 5));



var multiply = function(a, b, c, d, e) { return a * b * c * d * e; };
// console.log(multiply(1,1,1,2,3));
var curriedMultiply = curry(multiply);
partial = curriedMultiply(7);
partial = partial(3, 4);
console.log(partial(1, 5));


//
// var sum = function(a, b, c, d, e) { return a + b + c + d + e; };
// array = [3,3,2,3,2];
// console.log(sum.apply(this, array));
