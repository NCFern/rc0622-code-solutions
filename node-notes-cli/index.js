// const fs = require('fs');

const read = require('./read');
// const add = require('./add');
// const del = require('./delete');
// const update = require('./update');

const data = require('./data.json');

const feature = process.argv[2];

if (feature === 'read') {
  read(data);
}
