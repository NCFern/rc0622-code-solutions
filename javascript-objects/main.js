var student = {
  firstName: 'Johnny',
  lastName: 'Cage',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Mortal Kombat fighter';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Pontiac',
  model: 'Firebird Trans Am',
  year: '1982'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle.color:', vehicle.color);
console.log('value of vehicle.isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Charmander',
  type: 'Lizard'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
