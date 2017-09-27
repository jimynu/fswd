function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  var a1 = mergeSort(array.slice(0, Math.floor(array.length/2)));
  var a2 = mergeSort(array.slice(Math.floor(array.length/2), array.length));
  return function(A, B) {
    var returnArray = [];
    while (A.length > 0 || B.length > 0) {
      if (A[0] < B[0]) { returnArray.push(A.shift()); }
      if (B[0] <= A[0]) { returnArray.push(B.shift()); }
      if (B.length === 0 && A.length > 0) { returnArray.push(A.shift()); }
      if (A.length === 0 && B.length > 0) { returnArray.push(B.shift()); }
    }
    return returnArray;
  }(a1, a2);
}



/****** funktion merge separat ******/

// function mergeSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   var a1 = mergeSort(array.slice(0, Math.floor(array.length/2)));
//   var a2 = mergeSort(array.slice(Math.floor(array.length/2), array.length));
//   return merge(a1, a2);
// }
//
// function merge(A, B) {
//   var returnArray = [];
//   while (A.length > 0 || B.length > 0) {
//     if (A[0] < B[0]) { returnArray.push(A.shift()); }
//     if (B[0] <= A[0]) { returnArray.push(B.shift()); }
//     if (B.length === 0 && A.length > 0) { returnArray.push(A.shift()); }
//     if (A.length === 0 && B.length > 0) { returnArray.push(B.shift()); }
//   }
//
//   return returnArray;
// }



/****** not recursive ******/

// function mergeSort(array) {
//   var workArray = [];
//
//   // cut array in chunks of two numbers
//   while (array.length > 1) {
//     workArray.push(function(num1, num2){
//       if (num1 > num2) { return [num2, num1]; }
//       else { return [num1, num2]; }
//     }(array.pop(), array.pop()));
//   }
//   // if there's a lonely number left in array, put it in workArray as well
//   if (array.length > 0) { workArray.push([array.pop()]); }
//
//   // concat arrays
//   while (workArray.length > 1) {
//     workArray.push(function(arr1, arr2) {
//       var returnArray = [];
//       while (arr1.length > 0 || arr2.length > 0) {
//         if ( arr2.length === 0 || arr1[0] < arr2[0] ) { returnArray.push(arr1.shift()); }
//         else { returnArray.push(arr2.shift()); }
//       }
//       return returnArray;
//     }(workArray.shift(), workArray.shift()));
//   }
//
//   return workArray[0];
// }


// console.log(merge([2, 5], [1, 3]));
// console.log(mergeSort([3,4,1,6,2,8,9]));
// console.log(mergeSort([555,1,84,34,53,120,2,789,9,12,65,101,15,22,403]));

module.exports = {
  mergeSort: mergeSort
};
