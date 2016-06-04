var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port);
