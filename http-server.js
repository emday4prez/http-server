const express = require("express");
const low = require("lowdb");
const fs = require("lowdb/adapters/FileSync");
const cors = require("cors");
const _ = require("lodash");
const request = require("request");
const adapter = new fs("db.json");
const db = low(adapter);
const app = express();
const port = 8000; // don't edit this code

db.defaults({ users: [] }).write();

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())




app.get("/", function (req, res) {
  res.send("On Express server running on port 8000...");
});

app.get("/data", function (req, res) {
  res.send(db.get("users").value());
});

app.post('/test', (req, res) => {
 console.log(req.body.username, req.body.password)
 res.send(req.body.username + " " + req.body.password)
})

app.post('/add', (req, res) => {
 const user = {
  'name'         : req.body.name,
  'dob'          : req.body.dob,
  'email'        : req.body.email,
  'username'     : req.body.username,
  'password'     : req.body.password,
  'streetaddress': req.body.streetaddress,
  'citystatezip' : req.body.citystatezip,
  'latitude'     : req.body.latitude,
  'longitude'    : req.body.longitude,
  'avatar'       : req.body.avatar
 }
 db.get('users').push(user).write();
 console.log(db.get('users').value());
 res.send(db.get('users').value());
})

app.listen(port, function () {
  console.log(`Running on port ${port}...`);
});