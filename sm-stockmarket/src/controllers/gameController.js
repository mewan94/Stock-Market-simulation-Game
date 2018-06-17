import * as jwt from 'jsonwebtoken';
import config from '../config.json';
import { Game } from '../models/Game'

export class GameController {

    constructor() {
        this.games = [];
    }

    createGame(gameAdmin) {
        const g = new Game(gameAdmin);
        this.games.push(g);
        return g;
    }

    joinGame(gameID, playerID) {
        const g = this.games.find(v => v.gameID === gameID);
        if (g) {
            g.addPlayer(playerID);
            return true
        } else {
            return false;
        }
    }
    
    getStocks(gameID) {
        const g = this.games.find(v => v.gameID === gameID);
        if (g) {
            return g.getStocks();
        } else {
            return false;
        }
    }

    // decodePlayerName(token) {

    //     let p = jwt.decode(token);
    //     let playerName = p.name;

    //     Game(playerName);
    // }

    // getPlayerId() {
    //     let playerId = Game.getPlayerId();
    //     return playerId;
    // }

    // addPlayer() {
        
    // }

    // getCurrentTurn() {

    // }

    // getStock() {

    // }
}