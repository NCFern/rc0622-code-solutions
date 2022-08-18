const fs = require('fs');
const selectFile = process.argv[2];

fs.readFile(`./${selectFile}`, 'utf8', (err, data) => {
  if (!err) {
    console.log(`Text of ${selectFile}: ${data}`);
  } else {
    console.log('There was an error');
  }
});
