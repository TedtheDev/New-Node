var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var ObjectId = require("mongodb").ObjectId;
var url = "mongodb://localhost:27017/test";

var findRestaurants = function(db, callback)
  {
    var cursor =db.collection("restaurants").find( { "name" : "Juni" } );
    cursor.each(function(err, doc)
    {
      assert.equal(err, null);
      if (doc != null)
      {
        console.dir(doc);
      }
      else
      {
        callback();
      }
    });
  };

MongoClient.connect(url, function(err, db)
  {
    assert.equal(null, err);
    findRestaurants(db, function()
    {
      db.close();
    });
  });
