const express = require('express');
const bodyParser = require('body-parser');
const { Author } = require('./models/index');
const { Publication } = require('./models/index');

// app
const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(bodyParser.json());                         // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of application/x-www-form-urlencoded post data

// routes
app.get('/', function (req, res, next) {
  res.send({ greeting: "hello world" });
})

app.post('/store-user', function (req, res, next) {
  res.send(req.body);
})

app.get('/authors', async (req, res, next) => {
  const authors = await Author.findAll();
  res.send({ authors });
})

app.get('/authors-with-publications', async (req, res, next) => {
  const authors = await Author.findAll({ include: Publication });
  res.send({ authors });
})

app.get('/publications', async (req, res, next) => {
  const publications = await Publication.findAll({ include: Author });
  res.send({ publications });
})

const server = app.listen(port, () => {
  console.log(`REST API running on http://localhost:${server.address().port}`);
});
