import * as jwt from 'jsonwebtoken';
import config from '../config.json';
export class BrokerController {


    getStocks(token,gameId) {
       if(token){
        axios.post('/games'+gameId+'/stocks', {
            token:this.token,
            gameId: this.gameId
          })
          .then(function (response) {
           return response;
          })
          .catch(function (error) {
            return new Error="error occured"
          });
       }
       else{
           return new Error="Cannot connect to the API"
       }
    }

    buyStocks(token,gameId) {
        if(token){
         axios.post('/games'+gameId+'/stocks/buy', {
             token:this.token,
             gameId: this.gameId
           })
           .then(function (response) {
            return response;
           })
           .catch(function (error) {
             return new Error="error occured"
           });
        }
        else{
            return new Error="Cannot connect to the API"
        }
     }
     sellStocks(token,gameId) {
        if(token){
         axios.post('/games'+gameId+'/stocks/sell', {
             token:this.token,
             gameId: this.gameId
           })
           .then(function (response) {
            return response;
           })
           .catch(function (error) {
             return new Error="error occured"
           });
        }
        else{
            return new Error="Cannot connect to the API"
        }
     }
}