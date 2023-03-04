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

// -------- EVENT LISTENERS -------- //

board.addEventListener('click', function(event) {
    startGame(event);
    currentGame.playerMove();
    currentGame.playerWin();
    currentGame.gameDraw();
    // currentGame.gameReset();
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