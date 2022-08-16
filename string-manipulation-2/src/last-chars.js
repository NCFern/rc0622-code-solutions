/* exported lastChars */

// return string based on length, starting from end //
// if length is greater than the string, return string //
// if not, use slice method on string, subtracting string.length from length //

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  } else {
    return string.slice(string.length - length);
  }
}
