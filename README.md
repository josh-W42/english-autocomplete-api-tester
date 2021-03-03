# BYO-api

Now Bootstraped with create-react-app.

## The Goals:

The goal of this api is to make an autocomplete feature that's commonly used in search fields.

I want to make a route with query parameters that can change the data returned. Like: limit=10

## Planning:

I've used an english word database (400K english words) once before for effeciency testing and that is what is included in the data folder.
Orginal repo found [here](https://github.com/dwyl/english-words).

I also know that the Trie data structure can be used to implement autocomplete features. I had once before implemented a Trie for this purpose but have never implemented it via an API.

## Usage:

Install all dependancies.
```
npm install
```

Start React (If you want to test the api with a front-end)
```
npm start
```

Start Backend Server
```
npm run serve
```

- Once the server is started you can reach the api locally at: http://localhost:8000/v1/autocomplete
- Using postman, you can send requests and use the search param and limit parameters.

Example GET query:
```
http://localhost:8000/v1/autocomplete?search=apple
```

Example GET query with limit param:
```
http://localhost:8000/v1/autocomplete?search=c&limit=50
```
