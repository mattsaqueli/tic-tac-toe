// -------- GLOBAL -------- //

var currentGame = new Game(player1, player2);
var player1 = new Player(1, '🏂');
var player2 = new Player(2, '⛷️');
var move;

// -------- QUERY SELECTORS -------- //

var board = document.querySelector('.board');
var snowboarderWins = document.querySelector('.snowboarder-wins')
var skierWins = document.querySelector('.skier-wins')
var playerTurn = document.querySelector('.display-turn')
var boxes = document.querySelectorAll('.box')
var restartBtn = document.querySelector('.restart-btn')

// -------- EVENT LISTENERS -------- //

restartBtn.addEventListener('click', gameRestart);
board.addEventListener('click', function(event) {
    startGame(event);
    currentGame.playerMove();
    currentGame.playerWin();
    currentGame.gameDraw();
    playerTurnDisplay();
    playerWinnerDisplay();
  })

// -------- FUNCTIONS -------- //

function addToken(event) {
    move = event.target.id;
    if (!event.target.classList.contains('not-allowed')) {
      event.target.innerText = `${currentGame.emoji}`
      event.target.classList.add('not-allowed')
    }
  }

function startGame(event) {
    if (event.target.classList.contains('box')) {
        addToken(event);
        
    }
}

function playerTurnDisplay() {
    playerTurn.innerText = `${currentGame.emoji}'s turn!`;
}

function playerWinnerDisplay() {
    if (currentGame.winner === 'player1') {
        snowboarderWins.innerText = `GAMES WON: ${player1.wins}`
        playerTurn.innerText = `${player1.token} WINNER!`
    } else if (currentGame.winner === 'player2') {
        skierWins.innerText = `GAMES WON: ${player2.wins}`
        playerTurn.innerText = `${player2.token} WINNER!`
    } else if (currentGame.winner === 'draw game') {
        playerTurn.innerText = 'DRAW GAME!'
       
    }
    if (currentGame.winner === 'player1' ||
        currentGame.winner === 'player2' ||
        currentGame.winner === 'draw game') {
        disableBoard();
    }
}

function disableBoard() {
    board.classList.add('disable');
}

function gameRestart() {
    currentGame.gameRestart();
    board.classList.remove('disable');
    playerTurn.innerText = `${currentGame.emoji}'s turn!`;
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].classList.remove('not-allowed');
    }
}
