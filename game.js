class Game{
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.winner = null;
        this.board = 0;
        this.turn = 'player1';
        this.emoji = '🏂'
        this.winningBoxes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        }
   
    playerMove() {
        var makeMove = parseInt(move);
        for (var i = 0; i < this.board; i++) {
            if (player1.boxes[i] === makeMove || player2.boxes[i] === makeMove) {
                return;
            }
        }
        if (this.turn === 'player1') {
            player1.boxes.push(makeMove);
            this.switchPlayersTurn();
            this.board ++;
        } else if (this.turn === 'player2') {
            player2.boxes.push(makeMove);
            this.switchPlayersTurn();
            this.board ++;
        }
    }

    switchPlayersTurn() {
        if (this.turn === 'player1') {
            this.turn = 'player2';
            this.emoji = player2.token;
        } else if (this.turn === 'player2') {
            this.turn = 'player1';
            this.emoji = player1.token;
        }
    }

    playerWin() {
        for (var i = 0; i < this.winningBoxes.length; i++) {
            if (player1.boxes.includes(this.winningBoxes[i][0]) && player1.boxes.includes(this.winningBoxes[i][1]) && player1.boxes.includes(this.winningBoxes[i][2])) {
                this.winner = 'player1';
                player1.increaseWins();
            } else if (player2.boxes.includes(this.winningBoxes[i][0]) && player2.boxes.includes(this.winningBoxes[i][1]) && player2.boxes.includes(this.winningBoxes[i][2])) {
                this.winner = 'player2';
                player2.increaseWins();
            }
        }
    }

    gameDraw() {
        if(this.winner === null && this.board === 9) { 
            this.winner = 'Draw Game';
            this.gameReset();
        }
    }

    gameReset() {
        this.board = 0;
        this.winner = null;
        player1.boxes = [];
        player2.boxes = [];

    //     if (this.winner === 'player1' || 'Draw Game') {
    //         this.turn = player2.id;
    //         this.emoji = player2.token;
    //     } else if (this.winner === 'player2' || 'Draw Game') {
    //         this.turn = player1.id;
    //         this.emoji = player1.token;
    //     }
    }
}
