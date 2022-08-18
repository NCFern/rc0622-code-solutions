const fs = require('fs');

fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  if (!err) {
    console.log('dijkstra.txt: ', data);
  } else {
    console.log('There was an error');
  }
});
