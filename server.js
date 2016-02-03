var express  = require('express');
var morgan  = require('morgan');
var mongoose = require('mongoose');

var app  = express();

mongoose.connect('mongodb://root:abc123@ds055515.mongolab.com:55515/kentest', function(err){
  if (err){
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});

// middelware  - shows routes hit
app.use(morgan('dev'));

app.get('/', function(req, res){
  var name  = "Ken";
  res.json("My name is " + name);
});

app.get('/catname', function(req, res){
  res.json('Batman');
});

app.listen(3000, function(err){
  if (err) throw err;
  console.log("Server is running on port 3000");
});
