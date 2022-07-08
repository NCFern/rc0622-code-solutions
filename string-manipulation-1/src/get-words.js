/* exported getWords */

// returns string as seperated words //
// check if string is empty, if so, return empty array //
// check if string contains a space ' ', if so use split method to seperate the string from that point //

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

// check if string is empty, if so, return empty array //
// check if string contains a space ' ', if so use split method to seperate the string from that point //
