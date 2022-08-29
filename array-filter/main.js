function filter(array, predicate) {
  var finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = filter(numbers, num => num % 2 === 0);
console.log(evenNumbers);

const overFive = filter(numbers, num => num > 5);
console.log(overFive);

const startWithE = filter(names, name => name.startsWith('E', 0));
console.log(startWithE);

const haveD = filter(names, name => name.toLowerCase().includes('d'));
console.log(haveD);
