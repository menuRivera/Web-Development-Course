const goalPlayerOne = document.querySelector('#goalPlayerOne');
const goalPlayerTwo = document.querySelector('#goalPlayerTwo');
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const reset = document.querySelector('#reset');

const goal = document.querySelector('#goal');

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

goalPlayerOne.addEventListener('click', () => {
    playerOne.innerText = `${++scorePlayerOne}`;
    checkWin();
});
goalPlayerTwo.addEventListener('click', () => {
    playerTwo.innerText = `${++scorePlayerTwo}`;
    checkWin();
});

function checkWin() {
    if(scorePlayerOne >= goal.value) {
        alert('Player One Wins!!');
    }
    else if(scorePlayerTwo >= goal.value) {
        alert('Player Two Wins!!');
    }
}

reset.addEventListener('click', () => {
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    playerOne.innerText = scorePlayerOne;
    playerTwo.innerText = scorePlayerTwo;
});