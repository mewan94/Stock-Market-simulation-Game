//import * as jwt from 'jsonwebtoken';
import config from '../config.json';
import axios from 'axios'
export class BrokerController {


    getStocks(token, gameId) {
        if (token) {
            axios.post(config.stockmarketUrl + '/games/' + gameId + '/stocks', {
                token: token,
                gameId: gameId
            })
                .then(function (response) {
                    return response;
                })
                .catch(function (error) {
                
                    return new Error("error occured");
                });
        }
        else {
            return new Error("Cannot connect to the API");
        }
    }

    buyStocks(token, gameId) {
        if (token) {
            axios.post(config.stockmarketUrl + '/games/' + gameId + '/stocks/buy', {
                token: token,
                gameId: gameId
            })
                .then(function (response) {
                    return response;
                })
                .catch(function (error) {
                    return new Error("error occured");
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
                 return new Error("error occured");
                });
        }
        else {
            return new Error("Cannot connect to the API");
            
        }
    }
}