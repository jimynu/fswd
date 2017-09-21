// function merge(obj) {
//   var newObj = obj;
//   var obj2;
//
//   // loops runs for arguments-1 times
//   for (var i = 1; i < arguments.length; i++) {
//     // load obj to be merged
//     obj2 = arguments[i];
//
//     // console.log(i + ' th round')
//     // console.log(newObj);
//     // console.log(obj2);
//
//     // go throug the 2nd object
//     for (var key in Object.keys(obj2)) {
//       var keyToInsert = Object.keys(obj2)[key];
//       // if the key isn't in "newObj" yet, insert key + value
//       if (!newObj[keyToInsert]) {
//         newObj[keyToInsert] = obj2[keyToInsert];
//       }
//     }
//   }
//   return newObj;
// }

function merge(obj) {
  //reversed array of all arguments
  var array = [];
  for (var i = arguments.length-1; i >= 0; i--) {
    array.push(arguments[i]);
  }

  return Object.assign({}, array[1], array[0]);
}

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })); // { a: 3, b: 2, c: 4 }
//console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5})); // { a: 3, b: 2, c: 4, e: 8 }

// var obj = {
//   a: 1,
//   b: 2
// }
//
// for (var key in obj) {
//   console.log(obj[key]);
// }
