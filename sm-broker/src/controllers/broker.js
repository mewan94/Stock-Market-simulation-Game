//import * as jwt from 'jsonwebtoken';
import config from '../config.json';
import axios from 'axios'
export class BrokerController {


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
        return axios.get(config.bankUrl+'/player/'+player)
            .then(res => res.data )
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