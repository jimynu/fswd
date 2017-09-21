var obj = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Browser',
};

function objectKeys(obj){
  var keyArray = [];
  for (var key in obj) {
    //console.log(key);
    keyArray.push(key);
  }
  return keyArray;
}

//console.log(Object.keys(obj)); // ['2', 'keyCode', 'Target']

console.log(objectKeys(obj));
