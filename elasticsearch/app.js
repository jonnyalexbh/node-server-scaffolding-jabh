const express = require('express');
const app = express();

const routes = require('./app/routes');

routes.init(app);

module.exports = app;
