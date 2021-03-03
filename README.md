# BYO-api

## The Goals:

The goal of this api is to make an autocomplete feature that's commonly used in search fields.

I want to make a couple routes with query parameters that can change the data returned. Like: limit=10 or alphaOnly=true

I do also want to add a feature to add a word to dictionary.

## Planning:

I've used an english word database (479K english words) once before for effeciency testing and that is what is included in the data folder.
Orginal repo found [here](https://github.com/dwyl/english-words).


## Usage:

Install all dependancies.
```
npm install
```

Initalize database with words.
- This will make a mongoDB database and fill it with the words from the data file, Please delete this after use as it does take up a bit of space.
```
npm seed
```

Start server
```
npm start
```
