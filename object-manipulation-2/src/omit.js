/* exported omit */

// create empty object literal //
// loop through variable property in source object //
// if property in source object is included in keys array //
// if not, add that property along with its value into empty object literal //
// return object literal //

function omit(source, keys) {
  var finalOmit = {};
  for (var property in source) {
    if (keys.includes(property) === false) {
      finalOmit[property] = source[property];
    }
  }
  return finalOmit;
}
