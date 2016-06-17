//setup
var express = require('express');
var app = express();
var morgan = require('morgan');
//var database = require('./databaseStuff')

app.use(morgan('dev'));

//set jade as template engine
app.set('views', './helloWorld')
app.set('view engine', 'jade');

//set directories for html and css
app.use('/html', express.static('helloWorld'));
app.use('/css', express.static('css'));
app.use('/angularjs', express.static('angularjs'));
app.use('/node_modules', express.static('node_modules'));

app.get('/html/', function( req, res) {
  res.render('helloWorldJade');
  //res.sendFile(__dirname + '/helloWorld/angularWithPureHTML.html');
  //res.send('Hello World!@!@!');
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});



app.get('/', function(req, res) {
  res.send('It is working');
});

app.get('/api/restaurants', function(req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var assert = require("assert");
  var ObjectId = require("mongodb").ObjectId;
  var url = "mongodb://localhost:27017/test";
  var docArray = new Array();

  MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      db.collection("restaurants").find().toArray(function(err, docs) {
        res.json(docs);
        db.close();
      });
    });
});
