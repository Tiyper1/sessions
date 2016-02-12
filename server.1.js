//http module
var http = require( "http" );


//use create server function

var server = http.createServer(function (request, response){
    //write out headers
    response.writeHead(200, { "content-type" : "text/plain"});
    
    //content that user sees
    response.write("Hello Noder");
    
    //send out the response to the user
    response.end();
});

server.listen(process.env.PORT, function(){
   console.log("Listening at %s", process.env.IP); 
});


