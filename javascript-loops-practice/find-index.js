/* exported findIndex */
function findIndex(array, value) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  if (array[i] !== value) {
    return -1;
  }
  return finalArray;
}
