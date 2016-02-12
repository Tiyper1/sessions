//Express
var express = require("express");
var app = express();

//static
app.use("/public", express.static(__dirname + "/public"));

//main route
app.get("/", function(req, res){
   res.sendFile(__dirname + "/views/index.html");
});

//listen
 app.listen(process.env.PORT, function(){
        console.log("Listening at %s", process.env.IP); 
});