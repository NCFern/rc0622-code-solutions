// const nextId = 1;
const express = require('express');
const app = express();
const grades = {};

app.get('/api/grades', (req, res) => {
  const finalGrades = [];
  for (const key in grades) {
    finalGrades.push(grades[key]);
  }
  res.json(finalGrades);
});

app.use('/api/grades', express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
