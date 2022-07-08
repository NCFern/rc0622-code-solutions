/* exported countdown */
function countdown(number) {
  var finalCountdown = [];
  while (number >= 0) {
    finalCountdown.push(number);
    number--;
  }
  return finalCountdown;
}
