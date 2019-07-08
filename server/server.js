const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require('./routes/user');
const authentication = require('./routes/authentication');
const checkAuth = require('./middleware/check-auth')


var app = express();
// Database conenction
mongoose.connect("mongodb://localhost/orange");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/user", checkAuth, user);
app.use("/" , authentication);

// Starting application
app.listen(3003 , () => {
  console.log("Listening at : 3003");
});
