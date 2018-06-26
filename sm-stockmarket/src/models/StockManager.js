import config from '../config.json'
import { getRandomInt } from '../lib/util'

export class StockManager {
  stocks = [];
  marketTrends = [];
  sectorTrends = {};
  randomTrends = {};
  events = [];

  constructor(stocks) {
    this.stocks = stocks;
    this.populateRandomTrends();
    this.populateMarketTrends();
    this.populateSectorTrends();
    this.populateEvents();
  }

  getInitialStocks() {
    return this.stocks;
  }
  
  getCurrentStocks() {
    return this.stocks;
  }

  updateStocks(turn) {
    for (let i = 0; i < this.stocks.length; i++) {
      const stock = this.stocks[i];
      const randomTrend = this.randomTrends[stock.name][turn];
      const marketTrend = this.marketTrends[turn];
      const sectorTrend = this.sectorTrends[stock.sector][turn];
      const eventTrend = this.events[turn] ? this.events[turn].value : 0;
      let totalTrend = randomTrend + marketTrend + sectorTrend + eventTrend;
      
      if (totalTrend < 0) totalTrend = 0;
      const newPrice = stock.price + stock.price * totalTrend / 100;
      stock.price = Math.round(newPrice * 100) / 100;      
    }
  }

  populateMarketTrends() {
    let val = getRandomInt(-3, 3);
    for (let i = 0; i < config.turns; i++) {
      const p = Math.random();
      
      if (p < 0.25) val++;
      else if (p < 0.5) val--;
      else val = val;
      
      if (val >= 3) val = 3;
      if (val <= -3) val = -3;

      this.marketTrends.push(val);
    }
  }

  populateSectorTrends() {
    for(let s = 0; s < config.sectors.length; s++) {

      let trendArray = [];
      let val = getRandomInt(-3, 3);
      for (let i = 0; i < config.turns; i++) {
        const p = Math.random();
        
        if (p < 0.25) val++;
        else if (p < 0.5) val--;
        else val = val;
        
        if (val >= 3) val = 3;
        if (val <= -3) val = -3;

        trendArray.push(val);
      }

      this.sectorTrends[config.sectors[s]] = trendArray;
    }
  }
  
  populateRandomTrends() {
    for(let s = 0; s < config.stocks.length; s++) {

      let trendArray = [];
      let val = getRandomInt(-2, 2);
      for (let i = 0; i < config.turns; i++) {
        const p = Math.random();
        
        if (p < 0.5) val++;
        else val--;
        
        if (val >= 2) val = 2;
        if (val <= -2) val = -2;

        trendArray.push(val);
      }

      this.randomTrends[config.stocks[s]['name']] = trendArray;
    }
  }

  populateEvents() {
    let eventProbability = 0;
    for(let i = 0; i < config.turns; i++) {

      const r = Math.random();
      let eventOccurs = false;

      if (r < eventProbability) eventOccurs = true;
      
      if (!eventOccurs) {
        eventProbability += 0.1;
        this.events.push(null);
      } else {
        eventProbability = 0;
        const s = Math.random();
        let event;
        if (s < 0.33) {
          //sector
          event = this.generateSectorEvent();
          for(let v = 0; v < event.turns; v++) {
            this.events[i+v] = event;
          }
          // this.events.push(event);
        } else {
          //stock
          event = this.generateStockEvent();
          for(let v = 0; v < event.turns; v++) {
            this.events[i+v] = event;
          }
        }

      }

    }
  }

  generateSectorEvent() {
    let type;
    const probability = Math.random();
    let value;
    let turns;
    if (probability < 0.5) {
      type = 'BOOM';
      value = getRandomInt(1, 5);
    } else {
      type = 'BUST'
      value = getRandomInt(-1, -5);
    }
    turns = getRandomInt(2, 5);

    return {
      type,
      value,
      turns
    };
  }

  generateStockEvent() {
    let type;
    const probability = Math.random();
    let value;
    let turns;
    if (probability < 0.25) {
      type = 'PROFIT_WARNING';
      value = getRandomInt(2, 3);
    } else if (probability < 0.5) {
      type = 'TAKE_OVER',
      value = getRandomInt(-1, -5);
    } else {
      type = 'SCANDAL'
      value = getRandomInt(-3, -6);
    }
    turns = getRandomInt(1, 7);

    return {
      type,
      value,
      turns
    };
  }
}