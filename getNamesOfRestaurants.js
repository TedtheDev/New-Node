var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var url = "mongodb://localhost:27017/test";

function print(word)
{
  console.log(word);
}

var findRestaurants = function( db, callback) {
  print('grab data');
  var cursor = db.collection("restaurants").find( { "name" : "Vella" } );
  var docArray = cursor.each(function(err, doc) {

    if(docArray == null)
      var docArray = new Array();
    assert.equal(err, null);
    if (doc != null) {
      print('push');
      docArray.push(doc);
    }
    else {
      print('callback');
      callback();
      print('return docArray');
      return docArray;
    }
  });
};

MongoClient.connect(url, function(err, db) {
  console.log('assert');
  assert.equal(null, err);
  print('execute findRestaurants');
  var restaurants = findRestaurants(db, function() {
    db.close();
  });
  print(restaurants[0]);
});
