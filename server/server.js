const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user = require('./routes/user');
const authentication = require('./routes/authentication');
const checkAuth = require('./middleware/check-auth')
const cors = require('cors')


var app = express();
// Database conenction
mongoose.connect("mongodb://localhost/orange");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// Pour autoriser l'accès au serveur node depuis à notre domaine que celui de node
app.use(cors());

// To Desactivate authentication : app.use("/user", user);
// To activate anthentication : app.use("/user", checkAuth, user);
app.use("/user", user);
app.use("/" , authentication);

// Starting application
app.listen(3003 , () => {
  console.log("Listening at : 3003");
});
