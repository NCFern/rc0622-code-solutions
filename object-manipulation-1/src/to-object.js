/* exported toObject */

// make object literal //
// assign index 0 as key and index 1 as value to object //
// add property value to object //
// return object //

function toObject(keyValuePair) {
  var object = {};
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  object[property] = value;
  return object;
}
