const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res, next) => {
  res.send({ greeting: "hello world" });
})

const server = app.listen(port, function () {
  console.log(`listening http://localhost:${server.address().port}`);
});
