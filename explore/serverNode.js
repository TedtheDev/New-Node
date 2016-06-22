exports.startNodeServer = function() //expose for index to consume
{
  var fs = require("fs");
  fs.readFile('./helloWorld.html', function (err, html)
  {
    if(err)
    {
      throw err;
    }
    console.log("Initiating Server");
    var http = require("http");

    console.log("Starting Server");
    http.createServer(function(request, response){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(html);
      response.end();
    }).listen(8888);

    console.log("Server Running");
    }
  );
} 
