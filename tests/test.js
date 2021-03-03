const Trie = require('../Trie');

// test the trie

const trieTest = () => {
  const trie = new Trie();
  
  const smallDb = [
    "red",
    "rude",
    "rise",
    "ripe",
    "ripen",
    "happy",
    "cool",
    "crystal",
    "crysis",
    "crypt",
  ];
  
  for (word of smallDb) {
    trie.addWord(word);
  }
  
  console.log(trie.findSuffixes('r')); // all r words
  console.log(trie.findSuffixes('ri')); // rise, ripen, ripe
  console.log(trie.findSuffixes('ru')); // rude
  console.log(trie.findSuffixes('cry')); // crysis, crypt, crystal

  // now the real db
  // should be able to add all words without a problem
  const dictionaryJson = require('../data/words_dictionary.json');
  for (let word of Object.keys(dictionaryJson)) {
    trie.addWord(word);
  }
  // if you wanted to test on prefix
  // console.log(trie.findSuffixes('app'));

}

// trieTest();