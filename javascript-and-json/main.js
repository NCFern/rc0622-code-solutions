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

var JSONbooks = JSON.stringify(trashTaste);

console.log('JSONbooks:', JSONbooks);
console.log('typeof JSONbooks', typeof JSONbooks);

var JSONstudent = '{"id" : 8675309, "name" : "Tommy Tutone"}';

console.log('JSONstudent:', JSONstudent);
console.log('typeof JSONstudent', typeof JSONstudent);

var student = JSON.parse(JSONstudent);

console.log('student:', student);
console.log('typeof student', typeof student);
