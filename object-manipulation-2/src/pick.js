/* exported pick */

// creates object containing properties of source of keys //
// make empty object literal //
// loop through array of keys //
// if the values in key have similar values in the source //
// assign those values to new object //
// return object literal //

function pick(source, keys) {
  var finalPick = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      finalPick[keys[i]] = source[keys[i]];
    }
  }
  return finalPick;
}
