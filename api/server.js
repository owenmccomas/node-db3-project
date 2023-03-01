const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const bodyParser = require('body-parser');

const server = express();

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;