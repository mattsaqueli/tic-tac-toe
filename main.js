// -------- GLOBAL -------- //

var playerX = [];
var playerO = [];
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

box0.addEventListener('click');
box1.addEventListener('click');
box2.addEventListener('click');
box3.addEventListener('click');
box4.addEventListener('click');
box5.addEventListener('click');
box6.addEventListener('click');
box7.addEventListener('click');
box8.addEventListener('click');

// -------- FUNCTIONS -------- //

// function buildNewGame() {
//     currentGame = new Game();
// }

// function buildPlayerX() {
//     playerX = new Player('Player X');
//     currentGame.newPlayer(playerX);
// }

// function buildPlayerO() {
//     playerO = new Player('PlayerO');
//     currentGame.newPlayer(playerO)
// }



//winning combos

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
