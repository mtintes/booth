var eventTypes = require('./eventTypes');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var robot = require('./robot');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/booth/incoming', function (req, res) {
  var message = req.body.message;
  var from = req.body.from;

  console.log(message);

  var booth = new robot();
  booth.loadAllTheScripts();
  booth.processMessage(message);

  res.send("worked.");
});

app.listen(3006);
