const mongoose = require('mongoose');

configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect('mongodb://localhost/word-dictionary', configOptions);

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (error) => {
  console.log('Error when connecting to the database', error);
});

module.exports = {
  Word: require('./word')
}