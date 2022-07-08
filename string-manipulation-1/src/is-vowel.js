/* exported isVowel */

// check if character is A E I O U a e i o u //
// return true if so //
// if not, return false //

function isVowel(char) {
  if (char === 'A' || char === 'a' || char === 'E' || char === 'e' || char === 'I' || char === 'i' || char === 'O' || char === 'o' || char === 'U' || char === 'u') {
    return true;
  }
  return false;
}

// check if character is either a capital or lower cased vowel //
// if so, return true//
// if not, return false //
