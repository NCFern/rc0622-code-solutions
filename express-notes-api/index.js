const express = require('express');
const app = express();

app.use('/api/notes', express.json());

const fs = require('fs');

const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const finalNotes = [];
  for (const key in data.notes) {
    finalNotes.push(data.notes[key]);
  }
  res.json(finalNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const notesNumber = req.params.id;
  if (Number(notesNumber) <= 0 || !Number.isInteger(Number(notesNumber))) {
    res.status(400).json({
      error: 'id must be a positive interger'
    });
  } else if (!data.notes[notesNumber]) {
    res.status(404).json({
      error: `cannot find note with id ${notesNumber}.`
    });
  } else {
    res.status(200).json(data.notes[notesNumber]);
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  data.notes[data.nextId] = {
    id: data.nextId,
    content: req.body.content
  };
  const newNote = data.notes[data.nextId];
  data.nextId++;

  fs.writeFile('./data.json',
    JSON.stringify(data, null, 2),
    err => {
      if (err) {
        console.error('Error', err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
        return;
      }
      res.status(201).json(newNote);
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
