/* exported swapChars */

// swap chars of string using firstIndex and secondIndex //
// make a var(finalString) that uses split method to split string into array //
// make a var(otherString) that holds the previous var at the first index //
// assign finalString at firstIndex to equal finalString at secondIndex //
// assign final string at secondindex to equal otherString //
// use join method to convert array in string and return it //

function swapChars(firstIndex, secondIndex, string) {
  var finalString = string.split('');
  var otherString = finalString[firstIndex];
  finalString[firstIndex] = finalString[secondIndex];
  finalString[secondIndex] = otherString;
  return finalString.join('');
}
