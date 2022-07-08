/* exported includesSeven */
function includesSeven(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  if (array[i] !== 7) {
    return false;
  }
  return finalArray;
}
