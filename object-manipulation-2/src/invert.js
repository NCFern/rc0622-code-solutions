/* exported invert */

// create empty object //
// loop through var key in source//
// swap values of keys and values //
// return object //

function invert(source) {
  var finalInvert = {};
  for (var key in source) {
    finalInvert[source[key]] = key;
  }
  return finalInvert;
}
