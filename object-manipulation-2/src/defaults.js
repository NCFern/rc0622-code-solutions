/* exported defaults */

// assign properties of source to target //
// use for in loop to loop keys in source //
// if target[keys] is not found, assign that key to the target object//

function defaults(target, source) {
  for (var keys in source) {
    if (target[keys] === undefined) {
      target[keys] = source[keys];
    }
  }
}
