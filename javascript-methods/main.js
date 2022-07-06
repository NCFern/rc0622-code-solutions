var a = 123;
var b = 456;
var c = 789;

var maxValue = Math.max(a, b, c);
console.log('maxValue:', maxValue);

var heroes = [
  'Iskandar, King of Conquerors',
  'Sasaki Kojiro',
  'Diarmuid Ua Duibhne',
  'Gilles de Rais'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'I Want To Eat Your Pancreas',
    author: 'Yoru Sumino'
  },
  {
    title: 'Spy X Family',
    author: 'Tatsuya Endo'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 0);
console.log('library:', library);

var fullName = 'Volkner Tide';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
