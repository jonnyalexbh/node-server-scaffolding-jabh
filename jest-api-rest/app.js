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
