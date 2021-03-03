const db = require('../models');

// make a word
const makeWords = async () => {
  try {
    const newWord1 = await db.Word.create({
      content: "Happy"
    });

    console.log(newWord1);
  } catch (error) {
    console.error(error);
  }
}

makeWords();

// find all words
const findWords = async () => {
  try {
    const allWords = await db.Word.find({});
    console.log(allWords);
  } catch (error) {
    console.error(error);
  }
}

findWords();

// delete words
const deleteWords = async () => {
  try {
    findWords();
    const word = await db.Word.findOne({});
    await word.delete();

    const words = await db.Word.find({});
    console.log(words);
  } catch (error) {
    console.error(error);
  }
}

deleteWords();