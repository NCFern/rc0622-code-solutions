/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newInsert = new LinkedList(value);
  newInsert.next = list.next;
  list.next = newInsert;
}
