/* exported filterOutNulls */
function filterOutNulls(values) {
  var finalArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      finalArray.push(values[i]);
    }
  }
  return finalArray;
}
