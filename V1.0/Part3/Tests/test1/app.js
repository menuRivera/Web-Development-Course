const request = require("request");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("GET request to /");
    res.render("home");
});

app.listen(3000, (req,res) => {
    console.log("SERVER STARTED...");
});