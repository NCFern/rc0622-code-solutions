/* exported compact */

// remove falsy values (false, null, NAN, 0/-0, undefined, empty strings) //
// create new array //
// loop through array, and if it contains falsy values (!array), continue past it //
// push rest of the array to new array //
// return array //

function compact(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    }
    finalArray.push(array[i]);
  }
  return finalArray;
}

// create new array to hold values //
// check all indexes of array if it contains falsy values. If so, remove it //
// push all remaining values into the array //
// return the array //
