export class Game {
    playerList = [];

    constructor(gameAdmin) {
        this.gameAdmin = gameAdmin;
        this.gameID = gameAdmin;
        this.playerList.push(gameAdmin);
    }

    getGameID() {
        return this.gameID;
    }

    addPlayer(player) {
        this.playerList.push(player);
    }

    getCurrentTurn() {

    }
    
    getStock() {

    }
}