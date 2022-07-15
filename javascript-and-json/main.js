var trashTaste = [
  {
    isbn: '978-1569319031',
    title: 'Yu-Gi-Oh! Vol. 1',
    author: 'Kazuki Takahashi'
  },
  {
    isbn: '978-1598166781',
    title: 'Welcome to the N.H.K.',
    author: 'Kenji Oiwa'
  },
  {
    isbn: '978-1975383312',
    title: 'The Night is Short, Walk on Girl',
    author: 'Tomihiko Morimi'
  }
];

console.log('trashTaste:', trashTaste);
console.log('typeof trashTaste:', typeof trashTaste);

var booksJSON = JSON.stringify(trashTaste);

console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

var studentJSON = '{"id" : 8675309, "name" : "Tommy Tutone"}';

console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);

var student = JSON.parse(studentJSON);

console.log('student:', student);
console.log('typeof student:', typeof student);
