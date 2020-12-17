var h1 = document.querySelector("h1");
h1.style.color="pink";
var isBlue = false;

setInterval(function() {
    if(isBlue) {
        h1.style.background = "white";
    }
    else {
        h1.style.background = "grey";
    }
    isBlue = !isBlue;
}, 1000);

var tag = document.getElementById("highlight");
tag.style.color = "red";


// Retrieves a htmlcollection of elements
// var tags = document.getElementsByClassName("bolded");

// var ids = documents.getElementsByTagName("li");


// css selector-style
// var tags = document.querySelector(".bolded");

// MANIPULATING DOMs
    //style
var hello = document.getElementById("first");
hello.style.color = "blue";
hello.style.border = "1px solid grey";
hello.style.fontSize = "42px"
hello.style.background = "yellow";

    //adding/removing classes
var goodbye = document.getElementById("last");
goodbye.classList.add("generic-class");

setInterval(function() {
    goodbye.classList.toggle("generic-class");
}, 1000);

    //changing content of a tag
var strongTag = document.querySelector("strong"); //The name cant be name (?)
var nicole = strongTag.textContent; //innerHTML for keeping tags inside
strongTag.textContent = "Carlos";

    //attributes
var link = document.querySelector("p + a").setAttribute("href", "http://www.google.com");
