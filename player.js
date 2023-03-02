class Player{
    constructor(id, token, wins) {
        this.wins = wins || 0;
        this.token = token;
        this.id = id;
    }

    increaseWins() {
        this.wins += 1;
    }
}



