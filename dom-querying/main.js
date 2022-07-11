console.log('hello world');

var $headingOne = document.querySelector('h1');
console.log('h1:', $headingOne);
console.dir($headingOne);

var $explanation = document.querySelector('#explanation');
console.log('explanation:', $explanation);
console.dir($explanation);

var $hint = document.querySelector('.hint');
console.log('hint:', $hint);
console.log($hint);

var $paragraph = document.querySelectorAll('p');
console.log('paragraph:', $paragraph);

var $links = document.querySelectorAll('.example-link');
console.log('example-link:', $links);
