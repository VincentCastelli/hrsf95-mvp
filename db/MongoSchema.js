const mongoose = require('mongoose');

const { Schema } = mongoose;

const LeaderboardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = LeaderboardSchema;
