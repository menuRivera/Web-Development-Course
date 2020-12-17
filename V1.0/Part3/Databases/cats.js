const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Chuck",
//     age: 5,
//     temperament: "Evil"
// });

// george.save((err, cat) => {
//     if(err){
//         console.log("SOMETHING WENT WRONG");
//     }
//     else {
//         console.log("WE JUST SAVED A CAT TO THE DB:");
//         console.log(cat);
//     }
// });

// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: "Bland"
// }, (err, cats) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(cats)
//     }
// });

Cat.find({}, (err, cats) => {
    if(err) {
        console.log("ayo, a wild error spawned!");
        console.log(err);
    }
    else {
        console.log("all the cats");
        console.log(cats)
    }
});
