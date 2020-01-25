const express = require('express');
const app = express();

const ES = require('@elastic/elasticsearch');

const client = new ES.Client({
  node: 'https://localhost:9200',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/', async (_, res) => {
  try {
    const result = await client.search({
      index: 'trx-*',
      body: {
        query: {
          match: { _id: '829ce6fd30abff0fc22cef0f003985ae3545ee3825f32e6459aae0da2f8be241' }
        }
      }
    });
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

module.exports = app;
