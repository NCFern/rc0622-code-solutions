/* exported countValues */

function countValues(stack) {
  let finalCountdown = 0;
  while (typeof stack.pop() !== 'undefined') {
    finalCountdown++;
  }
  return finalCountdown;
}
