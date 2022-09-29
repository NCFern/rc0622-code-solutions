/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const first = list.data;
  const next = list.next.data;
  list.data = next;
  list.next.data = first;
  return list;
}
