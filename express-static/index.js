const express = require('express');
const path = require('path');

const app = express();

const absolutePath = path.join(__dirname, 'public');
const staticShock = express.static(absolutePath);

app.use(staticShock);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
