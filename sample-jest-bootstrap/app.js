const express = require('express');
const routes = require('./app/routes');

const app = express();

routes.init(app);

module.exports = app;
