## **Application

_We are going to build a REST API which is going to connect to an external (public) API that is going to serve us content (users)_

**Deploy heroku**

```sh
$ heroku git:clone -a jest-api-rest
$ git push heroku master
$ heroku logs --tail
```

**Start project**

```sh
$ npm init
$ npm i express
$ npm i nodemon --save-dev
$ node app.js
```

**Scripts**

```json
  "scripts": {
    "start": "node app.js",
    "start:dev": "nodemon --inspect app.js"
  },
```

**Install eslint airbnb**

```sh
$ npm install eslint --save-dev
$ npx eslint --init
```

**Basic structure**

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.json()); // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); // support application/x-www-form-urlencoded

app.get('/health', (req, res) => {
  res.send({ health: 'it works' });
});

app.post('/books', (req, res) => {
  res.send(req.body);
});

const server = app.listen(port, () => {
  console.log(`REST API running on http://localhost:${server.address().port}`);
});

```

**Install Jest**

```sh
$ npm install --save-dev jest
$ npx jest
$ npx jest unit/example.test.js
$ npx jest --coverage
```
