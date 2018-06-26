import config from '../config.json'
import { StockManager } from './StockManager';

export class Game {
  playerList = [];
  stocks = [];
  gameStarted = false;
  gameEnded = false;
  turn = -1;

  /**
   * 
   * @param {string} gameAdmin 
   * @param {StockManager} stockMgr 
   */
  constructor(gameAdmin, stockMgr) {
    this.gameAdmin = gameAdmin;
    this.stockManager = stockMgr;
    this.gameID = Math.random().toString(36).substring(4, 10);
    this.playerList.push(gameAdmin);
    this.stocks = this.stockManager.getInitialStocks();
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
      stocks: this.stockManager.getInitialStocks()
    };
  }

  startGame(turnCallback, endCallback) {
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
      this.stockManager.updateStocks(this.turn);
      if (this.turn >= config.turns) {
        clearInterval(timer);
        this.gameEnded = true;
        console.log('Game ended', this.gameEnded);
        endCallback({
          turn: this.turn,
          stocks: this.stockManager.getCurrentStocks()
        });
        return;
      }

      turnCallback({
        turn: this.turn,
        stocks: this.stockManager.getCurrentStocks()
      });
    }, config.turnTime);

    return 'Game started';
  }
}