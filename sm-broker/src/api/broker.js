
import express from 'express';
import * as jwt from 'jsonwebtoken';
import { BrokerController } from "../controllers/broker";

const router = express.Router();
const brokerController = new BrokerController();

router.post('/', (req, res) => {
    const getstocks = brokerController.getStocks(req.body.token, req.body.gameID);
    res.json(getstocks);
})

router.post('/buy', (req, res) => {
    const player = jwt.decode(req.body.token);
    let responseBody = {};
    if (!player) {
        res.status(403);
        responseBody = { error: 'Not authorized' };
    }
    
    if (!req.body.gameid) {
        res.status(401);
        responseBody = { error: 'Game id not found' };
    }
    
    if (!req.body.stock) {
        res.status(401);
        responseBody = { error: 'Stock not found' };
    }

    if (!req.body.amount) {
        res.status(401);
        responseBody = { error: 'Amount not found' };
    }
    
    brokerController.getStocks(req.body.token, req.body.gameid)
    .then(stocks => {
        let stock = stocks.find(v => v.name === req.body.stock)
        if (!stock) {
            res.status(401);
            responseBody = { error: 'No such stock' };
        };
        return stock;
    })
    .then(stock => {
        let cost = stock.price * req.body.amount;
        console.log(cost);
        
        return cost;
    })
    .then(cost => {        
        return brokerController.getPlayerDetails(player.name)
        .then(details => {
            if (!details.balance) {
                res.status(401);
                responseBody = { error: 'Error' };
            }
            if (details.balance < cost) {
                res.status(401);
                responseBody = { error: 'Not enough money' };
                throw new Error('no money')
            }
        })
        .then(result => {
            return brokerController.buyStocks(req.body.token, cost);
        })
        .then(result => {
            return brokerController.getPlayerDetails(player.name);
        })
        .then(newBalance => {
            responseBody = newBalance;
        })
    })
    .then(result => {
        res.send(responseBody);
    })
    .catch(err => {
        res.send(responseBody);
    })
    

    // const buyStocks = brokerController.buyStocks(req.body.token, req.body.gameID);
    // res.json(buyStocks);
})
router.post('/sell', (req, res) => {
    const sellStocks = brokerController.sellStocks(req.body.token, req.body.gameID);
    res.json(sellStocks);
})
export default router