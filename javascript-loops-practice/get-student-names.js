/* exported getStudentNames */
function getStudentNames(students) {
  var finalStudents = [];
  for (var i = 0; i < students.length; i++) {
    finalStudents.push(students[i].name);
  }
  return finalStudents;
}
