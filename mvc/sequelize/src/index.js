const express = require ('express');
const cors = require('cors');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(cors());
require('./app/index.js')(app);
app.listen(PORT, HOST);