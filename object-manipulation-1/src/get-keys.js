/* exported getKeys */

// create empty array to store keys //
// use for in statement to get key in object //
// push the key into array //
// return array //

function getKeys(object) {
  var finalKeys = [];
  for (var key in object) {
    finalKeys.push(key);
  }
  return finalKeys;
}

// create a new array to hold values //
// use a for in statement to iterate over the objects keys //
// push key values into array //
// return the new array //
