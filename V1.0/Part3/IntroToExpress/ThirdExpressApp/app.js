const express = require("express");
    app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs"); 

var friends = ["Tony", "Miranda", "Carlos", "José"];

app.get("/", function (req, res) {
    console.log("GET request [/]");

    res.render("home");
});
app.get("/fallInLoveWith/:thing", function(req,res) {
    console.log("GET request [/fallInLoveWith]");

    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});
app.get("/posts", function(req, res) {
    console.log("GET request [/posts]");

    var posts = [
        {title: "Post1", author: "Manuel"},
        {title: "Post2", author: "Doddy"},
        {title: "Post3", author: "Shakira"}
    ];
    res.render("posts", {posts: posts});
});
app.get("/friends", function(req, res) {
    console.log("GET request [/friends]");

    res.render("friends", {friends: friends});
});
app.post("/addfriend", function(req, res) {
    console.log("POST request [/addfriend]");

    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    console.log(friends);
    res.redirect("/friends");
});

app.get("/*", function(req, res) {
    res.send("ERROR");
});

app.listen(3000, function () {
    console.log("SERVER IS RUNNING...");
});