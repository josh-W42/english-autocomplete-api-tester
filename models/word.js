const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  content: String
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;