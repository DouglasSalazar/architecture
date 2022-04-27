const express = require("express");
const {routers} = require("./routers");
const bodyParser = require('body-parser');
const path = require('path');

require("dotenv").config();

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.set("view engine", "ejs")
app.set('views', path.join(__dirname),'views');
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use("/", routers);

app.listen(port, () => console.log(`Running on port ${port}`))