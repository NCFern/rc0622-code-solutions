/* exported flatten */

// takes multiple arrays, returns 1 array //
// make empty array to hold new array //
// loop through array //
// if array is in another array, make a new loop to go through inner array //
// push values into final array //
// if there isnt an array in an array, push values into final array //
// return final array //

function flatten(array) {
  var finalFlatten = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        finalFlatten.push(array[i][j]);
      }
    } else {
      finalFlatten.push(array[i]);
    }
  }
  return finalFlatten;
}
