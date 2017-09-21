var obj = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Browser',
};

function objectValues(obj){
  var keyArray = [];
  for (var key in obj) {
    //console.log(obj[key]);
    keyArray.push(obj[key]);
  }
  return keyArray;
}

//console.log(Object.keys(obj)); // ['2', 'keyCode', 'Target']
// console.values(objectKeys(obj));  // ['Program Paradigm', 'JS', 'Browser']

console.log(objectValues(obj));
