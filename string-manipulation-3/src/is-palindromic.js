/* exported isPalindromic */

// return boolean if string is a palindrome //
// create 2 empty strings to hold the string going forward and backward //
// loop through each string's letters //
// compare the two strings, if they are the same, return true //
// otherwise, return false //

function isPalindromic(string) {
  let finalForward = '';
  let finalBackward = '';
  for (let i = 0; i < string.length / 2 - 1; i++) {
    finalForward += string[i];
  }
  for (let j = string.length - 1; j > string.length / 2; j--) {
    finalBackward += string[j];
  }
  if (finalForward === finalBackward) {
    return true;
  } else {
    return false;
  }
}
