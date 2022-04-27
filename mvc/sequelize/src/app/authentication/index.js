
const express = require('express');

const router = express.Router();

require('./controller.js')(router);

module.exports = app => app.use('/auth', router);