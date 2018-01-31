const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();
server.use(bodyParser.json());
server.use(morgan('combined'));
server.get('/foo', (req, res) => {
  res.send('hello world');
});
module.exports = server;