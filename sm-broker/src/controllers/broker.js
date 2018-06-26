//import * as jwt from 'jsonwebtoken';
import config from '../config.json';
import axios from 'axios'
export class BrokerController {
    txns = [];

    getStocks(token, gameId) {
        if (token) {
            console.log(config.stockmarketUrl + '/game/' + gameId + '/stocks');

            return axios.post(config.stockmarketUrl + '/game/' + gameId + '/stocks', {
                token: token,
                gameId: gameId
            })
                .then(function (response) {
                    return response.data.stocks;
                })
                .catch(function (error) {

                    return new Error(error);
                });
        }
        else {
            return new Error("Cannot connect to the API");
        }
    }

    getPlayerDetails(player) {
        return axios.get(config.bankUrl + '/player/' + player)
            .then(res => res.data)
    }

    saveTransaction(val) {
        this.txns.push(val);
    }

    checkUserStock(player, stock, amount) {

        let res = this.txns.filter(v => {
            return v.stock === stock && v.type === 'buy'
        })
        if (res.length === 0) {
            return false;
        }
        return res.reduce((acc, val) => {

            return {
                gameid: val.gameid,
                player: val.player,
                type: val.type,
                stock: val.stock,
                amount: acc.amount + val.amount
            }
        });
    }

    buyStocks(token, amount) {
        if (token) {
            return axios.post(config.bankUrl + '/player/transaction', {
                token: token,
                type: "withdraw",
                amount: amount
            })
                .then(function (response) {
                    return response.body;
                })
                .catch(function (error) {
                    return new Error("error occured while connecting to the server");
                });
        }
        else {
            return new Error("Cannot connect to the API");
        }
    }

    sellStocks2(token, amount) {
        if (token) {
            return axios.post(config.bankUrl + '/player/transaction', {
                token: token,
                type: "deposit",
                amount: amount
            })
                .then(function (response) {
                    return response.body;
                })
                .catch(function (error) {
                    return new Error("error occured while connecting to the server");
                });
        }
        else {
            return new Error("Cannot connect to the API");
        }
    }

    sellStocks(token, gameId) {
        if (token) {
            axios.post(config.stockmarketUrl + '/games/' + gameId + '/stocks/sell', {
                token: token,
                gameId: gameId
            })
                .then(function (response) {
                    return response;
                })
                .catch(function (error) {
                    return new Error("error occured while connecting to the server");
                });
        }
        else {
            return new Error("Cannot connect to the server");

        }
    }
}