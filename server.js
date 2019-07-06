const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require('./routes/user');

var app = express();
// Database conenction
mongoose.connect("mongodb://localhost/orange");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/" , user);

// Starting application
app.listen(3003 , () => {
  console.log("Listening at : 3003");
})
