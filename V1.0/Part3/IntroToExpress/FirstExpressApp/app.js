var express = require("express");
    app = express();

//To make a request and see the response, open the browser and go to localhost:3000/

// "/" => "Hi there"
app.get("/", function(req, res) {
    console.log("GET request to /");
    res.send("Hi there");
});
// "/bye" => "Goodbye asshole"
app.get("/bye", function(req, res) {
    console.log("GET request to /bye");
    res.send("Goodbye asshole");
});
// "/dog" => "woof cabron"
app.get("/dog", function(req, res) {
    console.log("GET request to /dog");
    res.send("woof cabron!");
});
// route params
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});
app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    var subreddit = req.params.subredditName;
    var id = req.params.id;
    var title = req.params.title;
    res.send("COMMENTS SECTION OF THE " + subreddit.toUpperCase() + " SUBREDDIT || INFO: " + subreddit + " " + id + " " + title);
});


// "else" (this one has to be at the bottom)
app.get("*", function(req, res) {
    res.send("What the fuck is that? 404 for u, bitch");
});


//listen method
app.listen(3000, function() {
    console.log("Server has started bro; press ctrl+c to stop it");
});