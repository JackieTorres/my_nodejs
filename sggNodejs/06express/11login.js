const express = require("express");
const app = express();
var bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/11login.html");
});
app.post("/login", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(3000, () => {
  console.log("server running.");
});
