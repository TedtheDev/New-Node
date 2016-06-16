//setup
var express = require('express');
var app = express();
var morgan = require('morgan');
var database = require('./databaseStuff')

app.use(morgan('dev'));

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
      var cursor = db.collection("restaurants").find( { "name" : "Juni" } );
      cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null)
        {
          console.dir(doc);
          docArray.push(doc);
        }
        else
        {
          db.close();
        }
      });
  });
  res.json(docArray[0]);
});
