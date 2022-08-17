const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const numOne = Number(process.argv[2]);
const operator = process.argv[3];
const numTwo = Number(process.argv[4]);

if (operator === 'plus') {
  console.log('result', add.add(numOne, numTwo));
} else if (operator === 'minus') {
  console.log('result', subtract.subtract(numOne, numTwo));
} else if (operator === 'times') {
  console.log('result', multiply.multiply(numOne, numTwo));
} else if (operator === 'over') {
  console.log('result', divide.divide(numOne, numTwo));
} else {
  console.log('invalid operation');
}
