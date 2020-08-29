const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./app/routes');

const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.json()); // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); // support application/x-www-form-urlencoded

routes.init(app);

const server = app.listen(port, () => {
  console.log(`REST API running on http://localhost:${server.address().port}`);
});

module.exports = app;
