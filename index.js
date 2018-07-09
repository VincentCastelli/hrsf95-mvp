const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const dbConfig = require('./config').mongoURI;
const LeaderboardSchema = require('./db/MongoSchema');

const app = express();

app.use(bodyparser.json());
app.use('/', express.static(path.join(__dirname, '/html5')));

mongoose.connect(dbConfig)
  .then(() => console.log('Successfully connected to DB!'))
  .catch(err => console.log(`Error connecting to DB: ${err}`));

const Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema);

app.get('/leaderboard', (req, res) => {
  Leaderboard.find()
    .sort({ score: -1 })
    .then(data => res.json(data));
});

app.post('/leaderboard', (req, res) => {
  const newRecord = new Leaderboard({
    name: req.body.name,
    score: req.body.score,
  });

  newRecord.save().then(data => res.json(data));
});

app.delete('/:id', (req, res) => {
  Leaderboard.findById(req.params.id)
    .then(data => data.remove().then(() => res.json({ success: true })))
    .catch((err) => {
      console.log(`Error connecting to DB: ${err}`);
      res.status(404).json({ success: false });
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
