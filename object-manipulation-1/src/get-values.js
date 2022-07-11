/* exported getValues */

// create new array //
// access each key in object //
// push value of key properties of object //
// return values array //

function getValues(object) {
  var valueArray = [];
  for (var key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}
