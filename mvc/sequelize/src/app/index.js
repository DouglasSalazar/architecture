
const express = require('express');

const router = express.Router();

require('./authentication/index.js')(router);

module.exports = app => app.use('/', router);