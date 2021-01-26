const goalPlayerOne = document.querySelector('#goalPlayerOne');
const goalPlayerTwo = document.querySelector('#goalPlayerTwo');
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const reset = document.querySelector('#reset');
const container = document.querySelector('.container');
let isOver = false;

const goal = document.querySelector('#goal');

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

goalPlayerOne.addEventListener('click', () => {
    if (!isOver) {
        playerOne.innerText = `${++scorePlayerOne}`;
        checkWin();
    }

});
goalPlayerTwo.addEventListener('click', () => {
    if (!isOver) {
        playerTwo.innerText = `${++scorePlayerTwo}`;
        checkWin();
    }

});

function checkWin() {
    if (scorePlayerOne == goal.value) {
        playerOne.classList.add('winner');
        isOver = true;
    }
    else if (scorePlayerTwo == goal.value) {
        playerTwo.classList.add('winner');
        isOver = true;
    }
}

reset.addEventListener('click', () => {
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    playerOne.innerText = scorePlayerOne;
    playerTwo.innerText = scorePlayerTwo;
    isOver = false;
    playerOne.classList.remove('winner');
    playerTwo.classList.remove('winner');
});