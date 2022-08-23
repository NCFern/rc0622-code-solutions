const fs = require('fs');
const data = require('./data.json');
const feature = process.argv[2];

if (feature === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

if (feature === 'add') {
  const notes = data.notes;
  notes[data.nextId] = process.argv[3];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

if (feature === 'update') {
  const notes = data.notes;
  notes[process.argv[3]] = process.argv[4];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

if (feature === 'delete') {
  delete data.notes[process.argv[3]];
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}
