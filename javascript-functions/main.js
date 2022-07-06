function convertMinutesToSeconds(minutes) {
  var product = (minutes * 60);
  return product;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var hello = ('お前はもう死んでいる ' + name);
  return hello;
}

var greetResult = greet('NANI?!?');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var finalArea = (width * height);
  return finalArea;
}

var getAreaResult = getArea(23, 3);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Anya', lastName: 'Forger' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement(['Yugi', 'Jaden', 'Yusei']);
console.log('getLastElementResult:', getLastElementResult);
