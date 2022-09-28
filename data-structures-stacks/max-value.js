/* exported maxValue */

function maxValue(stack) {
  let infernity = -Infinity;
  while (stack.peek() !== undefined) {
    infernity = Math.max(infernity, stack.pop());
  }
  return infernity;
}
