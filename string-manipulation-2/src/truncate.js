/* exported truncate */

// cut string down to length, followed by '...' //
// make new var to hold the word //
// slice string at index 0 up to length then concatinate '...' //
// return new var //

function truncate(length, string) {
  var finalTruncate = string.slice(0, length) + '...';
  return finalTruncate;
}
