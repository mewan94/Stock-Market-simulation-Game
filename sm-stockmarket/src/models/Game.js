import config from '../config.json'

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

    startGame() {
        this.startTime = Date.now();
        this.turn = 0;
        let timer = setInterval(() => {
            this.turn++;
            console.log('Starting turn ' + this.turn);
            // calculate stocks
            if (this.turn >= config.turns) {
                clearInterval(timer);
                console.log('Game ended');
            }
        }, config.turnTime);
    }
}