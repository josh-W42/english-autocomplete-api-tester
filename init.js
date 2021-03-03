const dictionaryJson = require('./data/words_dictionary.json');
const Trie = require('./Trie');

let start = new Date();
// first store all the words in the trie
const myTrie = new Trie();
for (let word of Object.keys(dictionaryJson)) {
  myTrie.addWord(word);
}
let end = new Date();
let timeDifference = new Date(end - start);;

console.log(`Added all words in ${timeDifference.getMilliseconds()} ms`);

module.exports = {
  Trie: myTrie
}