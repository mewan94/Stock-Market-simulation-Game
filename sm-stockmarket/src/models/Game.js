import config from '../config.json'

export class Game {
    playerList = [];
    stocks = [];
    gameStarted = false;
    gameEnded = false;
    turn = -1;

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
        return this.turn;
    }
    
    getStocks() {
        return {
            gameID: this.gameID,
            currentTurn: this.turn,
            stocks: this.stocks
        };
    }

    startGame() {
        if (this.gameStarted && !this.gameEnded) {
            return 'Game already running'
        }
        
        if (this.gameEnded) {
            console.log('endedddd');
            return 'This game has ended'
        }

        this.gameStarted = true;

        this.startTime = Date.now();
        this.turn = 0;
        let timer = setInterval(() => {
            this.turn++;
            console.log('Starting turn ' + this.turn);
            // calculate stocks
            if (this.turn >= config.turns) {
                clearInterval(timer);
                this.gameEnded = true;
                console.log('Game ended', this.gameEnded);
            }
        }, config.turnTime);

        return 'Game started';
    }
}