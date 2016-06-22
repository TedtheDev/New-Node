module.exports = {
  connectToDB: function () {
    var MongoClient = require("mongodb").MongoClient;
    var assert = require("assert");
    var ObjectId = require("mongodb").ObjectId;
    var url = "mongodb://localhost:27017/test";
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);

    });
  }
}
