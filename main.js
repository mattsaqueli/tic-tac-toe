// -------- GLOBAL -------- //

var player1 = [];
var player2 = [];
var currentGame;

// -------- QUERY SELECTORS -------- //

var box0 = document.querySelector('#box0');
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');

// -------- EVENT LISTENERS -------- //

box0.addEventListener('click', addToken);
box1.addEventListener('click', addToken);
box2.addEventListener('click', addToken);
box3.addEventListener('click', addToken);
box4.addEventListener('click', addToken);
box5.addEventListener('click', addToken);
box6.addEventListener('click', addToken);
box7.addEventListener('click', addToken);
box8.addEventListener('click', addToken);

window.addEventListener('load', function() {
    buildNewGame();
    buildPlayer1();
    buildPlayer2();
})

// -------- FUNCTIONS -------- //

function buildNewGame() {
    currentGame = new Game();
}

function buildPlayer1() {
    player1 = new Player('Player 1', 'X');
    currentGame.newPlayer(player1);
}

function buildPlayer2() {
    player2 = new Player('Player 2', 'O');
    currentGame.newPlayer(player2)
}

function addToken(event) {
    if (player1.includes(event.target.id) || player2.includes(event.target.id)) {
        return;
    }

    // currentGame.board.push([currentGame.turn, event.target.id])
    // winningCombosP1();
    // winningCombosP2();
}

function winningCombosP1() {
    if (player1.includes('box0') && player1.includes('box1') && player1.includes('box2')) {
        currentGame.players[0].increaseWins();
    } else if (player1.includes('box3') && player1.includes('box4') && player1.includes('box5')) {
        currentGame.players[0].increaseWins();
    } else if (player1.includes('box6') && player1.includes('box7') && player1.includes('box8')) {
        currentGame.players[0].increaseWins();
    } else if (player1.includes('box0') && player1.includes('box3') && player1.includes('box6')) {
        currentGame.players[0].increaseWins();
    } else if (player1.includes('box1') && player1.includes('box4') && player1.includes('box7')) {
        currentGame.players[0].increaseWins();
    } else if (player1.includes('box2') && player1.includes('box5') && player1.includes('box8')) {
        currentGame.players[0].increaseWins();
    } else if (player1.includes('box0') && player1.includes('box4') && player1.includes('box8')) {
        currentGame.players[0].increaseWins();
    } else if (player1.includes('box2') && player1.includes('box4') && player1.includes('box6')) {
        currentGame.players[0].increaseWins();
    }
}

function winningCombosP2() {
    if (player2.includes('box0') && player2.includes('box1') && player2.includes('box2')) {
        currentGame.players[1].increaseWins();
    } else if (player2.includes('box3') && player2.includes('box4') && player2.includes('box5')) {
        currentGame.players[1].increaseWins();
    } else if (player2.includes('box6') && player2.includes('box7') && player2.includes('box8')) {
        currentGame.players[1].increaseWins();
    } else if (player2.includes('box0') && player2.includes('box3') && player2.includes('box6')) {
        currentGame.players[1].increaseWins();
    } else if (player2.includes('box1') && player2.includes('box4') && player2.includes('box7')) {
        currentGame.players[1].increaseWins();
    } else if (player2.includes('box2') && player2.includes('box5') && player2.includes('box8')) {
        currentGame.players[1].increaseWins();
    } else if (player2.includes('box0') && player2.includes('box4') && player2.includes('box8')) {
        currentGame.players[1].increaseWins();
    } else if (player2.includes('box2') && player2.includes('box4') && player2.includes('box6')) {
        currentGame.players[1].increaseWins();
    }
}



// winning combos

// ROWS
// 012
// 345
// 678

// COLUMS
// 036
// 147
// 258

// DIAGONALS
// 048
// 246
