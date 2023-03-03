class Game{
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.winner = null;
        this.board = 0;
        this.turn = 1;
        }

    winningCombos() {
        var winningBoxes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (var i = 0; i < winningBoxes.length; i++) {
            if (player1.boxes.includes(winningBoxes[i])) {
                this.player1.increaseWins();
                this.winner = 'player1';
            } else if (player2.boxes.includes(this.winningCombos)) {
                this.player2.increaseWins();
                this.winner = 'player2';
            }
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


    gameDraw() {
        if(this.winner === null && this.board === 9) { 
            this.winner = 'Draw Game'
            this.gameReset();
        }
    }

    gameReset() {
        this.winner = null;
        player1.boxes = [];
        player2.boxes = [];

        if (this.winner === 'player1' || 'draw') {
            this.turn = player2.id;
        } else if (this.winner === 'player2' || 'draw') {
            this.turn = player1.id;
        }
    }

}
