var express = require("express");
var app = express();
var path = require("path");
var config = require("./config");

app.set("port", config.get("port"));
app.set("env", "development");

app.use(function(req, res, next){
  if(req.url === "/index"){
    res.send("index page");
  } else{
    next(new Error("forbidden"));
  }
});

app.use(function(err, req, res, next){
  if(app.get("env") === "development"){
    console.log(err);
    res.send("err");
  } else{
    res.send("access denied");
  }
});

app.listen(app.get("port"), function(){
  console.log("Server is running on port " + app.get("port"));
});
