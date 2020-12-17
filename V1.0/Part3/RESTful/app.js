const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//  APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//  MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);
// Blog.create({
//     title: "hola perro",
//     body: "hola hola cabezon"
// }, (err, campground) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("NEW CAMPGROUND: ");
//         console.log(campground);
//     }
// });

//  RESTUFL ROUTES
app.get("/", (req, res) => {
    res.redirect("/blogs");
});
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { blogs: blogs });
        }
    });
    res.render("index");
});

app.listen(3000, () => {
    console.log("SERVER IS RUNNING...");
});