function invert(obj) {
  var newObj = {};

  var keyArray = Object.keys(obj);

  // keys
  // keyArray.forEach(function(key) {
  //   console.log(key);
  // });

  // [].prototype.slice.call(arguements)

  for (var i = 0; i < keyArray.length; i++) {
    // key –> new content
    console.log(keyArray[i]);
    // content –> new key
    console.log(obj[keyArray[i]]);

    newObj[obj[keyArray[i]]] = keyArray[i];
  }

  return newObj;
}


console.log(invert({ a: 3, b: 2 })); // { 2: 'b', 3: 'a' }


// function newObject(args) {
//   var newObj = {};
//   var values = Object.values(args).join('');
//   console.log(values);
//   newObj[key[[i]]] = 0;
// }
//
// console.log(newObject({a:'1', b:'2'}));
