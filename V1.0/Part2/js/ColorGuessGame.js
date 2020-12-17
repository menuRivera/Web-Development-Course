var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function () {
    reset();
});

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDsiplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again"
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        //mode buttons event listeners
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function changeColors(color) {
    //loop to all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    // make an array
    var array = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        array.push(randomColor());
    }
    // return that array
    return array;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}