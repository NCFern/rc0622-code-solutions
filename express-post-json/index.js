const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const finalGrades = [];
  for (const key in grades) {
    finalGrades.push(grades[key]);
  }
  res.json(finalGrades);
});

app.use('/api/grades', express.json());

app.post('/api/grades', (req, res, next) => {
  const newInfo = req.body;
  newInfo.id = nextId;
  grades[nextId] = newInfo;
  nextId++;
  res.status(201).json(newInfo);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
