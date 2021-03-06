var express = require("express");
var app = express();

app.use(express.static("partials"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("*", function(req, res){
    res.render("landing");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("now serving app");
});
