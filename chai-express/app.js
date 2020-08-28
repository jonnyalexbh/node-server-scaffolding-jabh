const express = require('express');
const app = express();

app.get('/sample-test', (req, res) => {
  res.status(200).send('our first test with chai')
})

module.exports = app;
