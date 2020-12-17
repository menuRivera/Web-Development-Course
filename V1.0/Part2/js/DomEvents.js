//Syntax: 
//element.addEventListener(type,functionToCall);

// Click on a button
var i = 0;
var button = document.querySelector("button").addEventListener("click", function () {
  var jumbo = document.getElementById("jumbo");
  jumbo.style.background = getRandomColor();

  var h1 = document.querySelector("h1");
  h1.textContent = "EVENTS MF  (CLICKS " + ++i + ")";
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ScoreKeeper game
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
  }
  p1Display.textContent = p1Score;
})
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
  }
  p2Display.textContent = p2Score;
})

resetButton.addEventListener("click", resetGame)

numInput.addEventListener("change", function () {
  winningScoreDisplay.textContent = Number(this.value);
  winningScore = Number(this.value); //parse
  resetGame();
})

function resetGame() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;

}

// Todo list

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function () {
    this.classList.add("selected");
  })
  lis[i].addEventListener("mouseout", function () {
    this.classList.remove("selected");
  })
  lis[i].addEventListener("click", function() {
    this.classList.toggle("done");
  })
}
