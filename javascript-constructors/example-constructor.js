function ExampleConstructor() {
  console.log('ExampleConstructor', ExampleConstructor.prototype);
  console.log('typeof ExampleConstructor', typeof ExampleConstructor.prototype);
}

var newExample = new ExampleConstructor();
console.log('newExample', newExample);
console.log('typeof newExample', typeof newExample);

var compareExample = newExample instanceof ExampleConstructor;
console.log('value of compareExample', compareExample);
console.log('typeof compareExample', typeof compareExample);
