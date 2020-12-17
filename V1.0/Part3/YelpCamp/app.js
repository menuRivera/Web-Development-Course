const express   = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose');

//#region CONNECTIONS
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true}); //updated
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//#endregion

//#region SCHEMA SETUP (MONGOOSE)
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
var Campground = mongoose.model("Campground", campgroundSchema);
//  CREATE A CAMPGROUND
// Campground.create(
//     {
//         name: "Salmon Creek",
//         image: "https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     },
//     function (err, campground) {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log("NEW CAMPGROUND: ");
//             console.log(campground);
//         }
//     }
// );
//#endregion

//#region ROUTES
app.get("/", (req, res) => {
    console.log("GET /");
    res.render("landing");
});
app.get("/campgrounds", (req, res) => {
    console.log("GET /campgrounds");
    Campground.find({}, (err, allCampgrounds) => {
        if(err) {
            console.log(err);
        }
        else{
            res.render("index", { campgrounds: allCampgrounds });
        }
    })
});
app.post("/campgrounds", (req, res) => {
    console.log("POST /campgrounds");
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = { name: name, image: image, description: desc };
    Campground.create(newCampground, (err, newlyCreated) => {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});
app.get("/campgrounds/new", (req, res) => {
    console.log("GET /campgrounds/new");
    res.render("new");
});
app.get("/campgrounds/:id", (req, res) => {
    // find campground with provided ID
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("show", {campground: foundCampground});
        }
    });
});
//#endregion

//#region LISTEN
app.listen(3000, () => {
    console.log("SERVER IS RUNNING...");
});
//#endregion






// var campgrounds = [
//     { name: "Salmon Creek", image: "https://images.unsplash.com/photo-1483381719261-6620dfa2d28a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80" },
//     { name: "Granite Hill", image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
//     { name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1471115853179-bb1d604434e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1259&q=80" },
//     { name: "Daisy Mountain", image: "https://images.unsplash.com/photo-1516013894828-b214a58fdba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80" }
// ]