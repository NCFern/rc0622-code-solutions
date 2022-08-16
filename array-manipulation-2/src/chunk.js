/* exported chunk */

// make array in array where each array contains the same size //
// make new array //
// make a loop where i goes until array.length and increments i += size//
// push array using slice method by slicing array into increments based on i into new array//
// retrun final array //

function chunk(array, size) {
  var finalChunk = [];
  for (var i = 0; i < array.length; i += size) {
    finalChunk.push(array.slice(i, i + size));
  }
  return finalChunk;
}
