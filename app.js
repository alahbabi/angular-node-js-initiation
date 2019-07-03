const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short'))  // combined or short 

app.get("/", (req, res) => {
  console.log("REST API SAID HELLO")
  res.send("Hello Abdelkarim LAHBABI")
})

app.get("/users", (req, res) => {
  var user1 = {firstName: "Abdelkarim", lastName: "LAHBABI"}
  res.json(user1)
})

app.listen(3002, () => {
  console.log("App strated baby")
})
