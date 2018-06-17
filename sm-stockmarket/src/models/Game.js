import config from '../config.json'

export class Game {
    playerList = [];
    stocks = [];

    constructor(gameAdmin) {
        this.gameAdmin = gameAdmin;
        this.gameID = Math.random().toString(36).substring(4, 10);
        this.playerList.push(gameAdmin);
        this.stocks = config.stocks;
    }

    getGameID() {
        return this.gameID;
    }

    addPlayer(player) {
        this.playerList.push(player);
    }

    getCurrentTurn() {

    }
    
    getStocks() {
        return this.stocks;
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