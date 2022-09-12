/* exported isAnagram */

// return boolean if first and second string is an anagram //
// take string and remove spaces, then split the string, then sort the string, the join the string //
// compare both strings, if they are the same, return true //
// otherwise, return false //

function isAnagram(firstString, secondString) {
  const firstLetters = firstString.replaceAll(' ', '').split('').sort().join('');
  const secondLetters = secondString.replaceAll(' ', '').split('').sort().join('');
  if (firstLetters === secondLetters) {
    return true;
  } else {
    return false;
  }
}
