//setup
var express = require('express');
var app = express();
var morgan = require('morgan');
var stylus = require('stylus');
var nib = require('nib');
var path = require('path');


// This must be BEFORE other app.use
//this function is to compile stylus file into css
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
    .set('compress', true)
    .import('nib');
}

//compile stylus
app.use(stylus.middleware({
  src: __dirname + '/resources',
  dest: __dirname + '/public',
  debug: true,
  force: true,
  compile: compile
}));
app.use(express.static('public'));

//set dev env
app.use(morgan('dev'));

//set jade as template engine
app.set('views', 'views');
app.set('view engine', 'jade');

//set directories for html and css
app.use('/css', express.static('public/stylesheets'));
app.use('/angularjs', express.static('angularjs'));
app.use('/node_modules', express.static('node_modules'));
app.use('/views', express.static('views'));

// landing page
app.get('/', function( req, res) {
  res.render('index');
});

app.get('/views/:name', function (req, res) {
  var name = req.params.name;
  res.render(__dirname + '/views/' + name);
});

//listening
app.listen(3000, function() {
  console.log('Listening on 3000');
});

//api to get restaurants
app.get('/api/restaurants', function(req, res) {
  var MongoClient = require("mongodb").MongoClient;
  var assert = require("assert");
  var ObjectId = require("mongodb").ObjectId;
  var url = "mongodb://localhost:27017/test";
  var docArray = new Array();

  MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      db.collection("restaurants").find().limit(5).toArray(function(err, docs) {
        if(err)
          throw err;
        else
          res.json(docs);
        db.close();
      });
    });
});
