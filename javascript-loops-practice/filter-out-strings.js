/* exported filterOutStrings */
function filterOutStrings(values) {
  var finalStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'string') {
      continue;
    } else {
      finalStrings.push(values[i]);
    }
  }
  return finalStrings;
}
