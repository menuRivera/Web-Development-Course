const request = require("request");
const express = require("express");
    app = express();
    app.set("view engine", "ejs");

app.use(express.static("public"));

//Home
app.get("/", (req, res) => {
    console.log("GET / request made");
    res.render("search");   
});

//Results
app.get("/results", (req, res) =>{
    let query = req.query.search;
    let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;
    
    console.log("GET /resutls request made");

    request(url, (error, response, body) => {
        if(response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});



//Listen
app.listen(3000, (req,res) => {
    console.log("SERVER RUNNING...");
});