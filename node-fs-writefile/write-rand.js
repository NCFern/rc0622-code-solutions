const fs = require('fs');

fs.writeFile(
  './random.txt',
  String(Math.random()) + '\n', err => {
    if (err) {
      console.error('There is an error');
    }
  }
);
