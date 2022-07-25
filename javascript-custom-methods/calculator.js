/* exported calculator */

var calculator = {
  add: function (x, y) {
    return (x + y);
  },
  subtract: function (x, y) {
    return (x - y);
  },
  multiply: function (x, y) {
    return (x * y);
  },
  divide: function (x, y) {
    return (x / y);
  },
  square: function (x) {
    return (x * x);
  },
  sumAll: function (numbers) {
    var finalNumber = 0;
    for (var i = 0; i < numbers.length; i++) {
      finalNumber = numbers[i] + finalNumber;
    }
    return finalNumber;
  },
  getAverage: function (numbers) {
    var finalNumber = 0;
    for (var i = 0; i < numbers.length; i++) {
      finalNumber = numbers[i] + finalNumber;
    }
    return finalNumber / numbers.length;
  }
};
