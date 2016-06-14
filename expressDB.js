var MongoClient = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test', function( err, db) {
  if(err)
  {
    throw err;
  }
  db.collection('restaurants').find().toArray(function(err, result) {
    if(err)
    {
      throw err;
    }
    console.log(result);
  });
});
