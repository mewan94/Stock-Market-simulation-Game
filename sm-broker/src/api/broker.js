
import express from 'express';
import { BrokerController } from "../controllers/broker";

const router = express.Router();
const brokerController = new BrokerController();



router.post('/', (req, res) => {
    const getstocks = brokerController.getStocks(req.body.token, req.body.gameID);
    res.json(getstocks);
})

router.post('/buy', (req, res) => {
    const buyStocks = brokerController.buyStocks(req.body.token, req.body.gameID);
    res.json(buyStocks);
})
router.post('/sell', (req, res) => {
    const sellStocks = brokerController.sellStocks(req.body.token, req.body.gameID);
    res.json(sellStocks);
})
export default router