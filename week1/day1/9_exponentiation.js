// Exponentiation
//
// Write a function that takes two integers. The first one will be the base b and the second one n will be the exponent.
//
// The function should return the value of b raised to the power n.
//
// Try to solve it with recursion.
//
// You can try first with a loop and then try to implement the recursive approach.


// function countDownFrom(num) {
//   // 1. Check if num is zero
//   if(num === 0) {
//     // 2. If is zero terminate
//     return;
//   } else {
//     // 3. Decrement the number
//     num--;
//   }
//   // 4. Print number
//   console.log(num);
//   // 5. Call it the fn
//   // countDownFrom(num--);
//   countDownFrom(num);
//   return;
// }
// countDownFrom(10);



// // without recursion
// function exp1(b, n) {
//   var result = 1;
//   for (var i = 0; i < n; i++) {
//     result = result*b;
//   }
//   return(result);
// }

function exp(b, n) {
  var result = 1;
  if(n>0) {
    result = b * exp(b, n-1);
  }
  return result;
}


console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1
