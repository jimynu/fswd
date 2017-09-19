// factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120.
//
// Write a function that expects an integer greater than 0 and returns the factorial of that number.

// Write a recursive approach for this problem.

function factorial(n) {
  if (n==0) {
    return 1;
  }
  return n * factorial(--n);
}

console.log(factorial(5)); // => 120
console.log(factorial(4)); // => 24
console.log(factorial(0)); // => 1
