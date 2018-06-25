import config from '../config.json'

export class StockManager {
  stocks = [];

  constructor(stocks) {
    this.stocks = stocks;
  }

  getInitialStocks() {
    return this.stocks;
  }
  
  getCurrentStocks() {
    return this.stocks;
  }
}