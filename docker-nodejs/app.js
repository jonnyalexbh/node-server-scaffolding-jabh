const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Docker NodeJs')
});

const server = app.listen(port, () => {
  console.log(`listening http://localhost:${server.address().port}`);
});
