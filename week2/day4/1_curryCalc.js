// Define a function that returns a currying calculator.
// The currying calculator will keep returning a function until 5 parameters are passed in total.
// Then it returns the sum of all 5 params.

// function createCurryCalc(num, num2) {
//     return function(num2) {
//       return num + num2;
//     };
// }
//
// var partial = createCurryCalc(4);
// console.log(partial(3));
//
//
// function createCurryCalc2(num1, num2) {
//     return function(num2) {
//       return num1 + num2;
//     };
// }
//
//
// function createCurryCalc3(num1, num2, num3) {
//     return function(num2, num3) {
//       return num1 + num2 + num3;
//     };
// }


function createCurryCalc() {
  var array = [];

  var internal = function(...argms) {
    for (var el of argms) {
      array.push(el);
    }
    if (array.length >= 5) {
      //return array[0] + array[1] + array[2] + array[3] + array[4];
      return array.reduce(function(sum, el) { return sum + el; });
    } else {
      return internal;
    }
  };
  return internal;
}


var curryCalc = createCurryCalc();
var partial = curryCalc(7, 3, 4);
console.log(partial(1, 5));




//
// var curryCalc2 = createCurryCalc();
// var partial2 = curryCalc2(2);
// partial2 = partial2(4, 5);
// console.log(partial2(1, 3));
//
//
// // Partial application
// function mapGenerator(fn) {
//   // function that applies a fn to each element
//   return function(arr) {
//     var newArr = [];
//     // go through each element in arr
//     for (var el of arr) {
//       // applies the fn, and adds it to the new array
//       newArr.push(fn(el));
//     }
//
//     // return new array
//     return newArr;
//   }
// }
