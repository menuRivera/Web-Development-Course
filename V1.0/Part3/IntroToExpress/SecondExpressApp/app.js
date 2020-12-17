var express = require("express");
    app = express();
app.get("/", function(req, res) {
    res.send("HI THERE, WELCOME TO MY ASSIGNMENT!");
});
app.get("/speak/:animal", function(req, res) {
    var sounds = {
        dog: "Woof putito",
        pig: "Oink cabron",
        cow: "Moo pinche perro",
        goldfish: "Soy un pescado alv"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send(sound);
    // if(animal == "pig") 
    //     res.send("Oink cabron");
    // else if(animal == "cow")
    //     res.send("Moo pinche perro");
    // else if(animal == "dog")
    //     res.send("Woof putito");
});
app.get("/repeat/:word/:times", function(req, res) {
    var times = req.params.times;
    var word = req.params.word;
    var arr = "";
    for(var i=0; i<times; i++) {
        arr += word + " ";
    }
    res.send(arr);
});
app.get("*", function(req, res) {
    res.send("WTF MAN, THAT ROUTE DOESN'T EVEN EXIST!");
});

app.listen("3000", function() {
    console.log("SERVER RUNNING...");
});

