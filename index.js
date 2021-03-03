const express = require('express');
const app = express();
const { Trie } = require('./init');

const cors = require('cors');
app.use(cors());

// morgan
app.use(require('morgan')('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/v1/autocomplete', (req, res) => {

  const query = req.query.search;
  let limit = req.query.limit;

  // Limit the number of retured values
  if (!limit) {
    limit = 30;
  }

  let results = Trie.findSuffixes(query);
  
  if (results === -1) {
    res.status(200).json({ anyFound: false, results: [] });
  } else {
    results = results.slice(0, limit);
    res.status(200).json({ results });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Autocomplete api running on port: ', PORT);
});