class Game{
    constructor() {
        this.board = [];
        this.players = [];
        this.turn = 'playerX'
        }

    newPlayer(playerInfo) {
      var newPlayer = new Player(playerInfo.token, playerInfo.id, playerInfo.wins);
      this.players.push(newPlayer);
    }

    gameDraw() {
        if(this.board.length > 9) { 
            this.gameReset();
        }
    }

    gameReset() {
        this.board = [];
    }

}
