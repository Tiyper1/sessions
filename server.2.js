//http module
var http = require( "http" );


//use create server function

var server = http.createServer(function (request, response){
    //write out headers
    response.writeHead(200, { "content-type" : "text/html"});
    
    //content that user sees
    response.write("<h1>Hello World</h1>");
    
    //send out the response to the user
    response.end();
});

server.listen(process.env.PORT, function(){
   console.log("Listening at %s", process.env.IP); 
});


