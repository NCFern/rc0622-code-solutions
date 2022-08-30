const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use('/api/grades', express.json());

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({
      error: 'Grade ID must be a positive interger'
    });
    return;
  }

  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
  from "grades"
  where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(results => {
      const [grades] = results.rows;

      if (!grades) {
        res.status(404).json({
          error: `No grade found with ID: ${gradeId}`
        });
        return;
      }
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select "gradeId",
         "name",
         "course",
         "score",
         "createdAt"
  from "grades"
  where "gradeId" = $1
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT:3000');
});
