const express = require('express');
const models = require('./models/index');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send({ title: 'Docker compose Nodejs PostgreSQL' })
});

app.get('/users', function (_, res) {
  models.User.findAll().then((users) => {
    console.log("All users:", JSON.stringify(users, null, 4));
    res.send(users);
  });
});

const server = app.listen(port, () => {
  console.log(`listening http://localhost:${server.address().port}`);
});
