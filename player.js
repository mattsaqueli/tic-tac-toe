class Player{
    constructor(id, token) {
        this.wins = 0;
        this.token = token;
        this.id = id;
        this.boxes = [];
    }

    increaseWins() {
        this.wins ++;
    }
}



