
import express from 'express';
import { BrokerController } from "../controllers/broker";

const router = express.Router();
const BrokerController = new BrokerController();



router.post('/', (req, res) => {
    const getstocks = BrokerController.getStocks(req.body.token, req.body.gameID);
    res.json(getstocks);
})

router.post('/', (req, res) => {
    const buyStocks = BrokerController.buyStocks(req.body.token, req.body.gameID);
    res.json(buyStocks);
})
router.post('/', (req, res) => {
    const sellStocks = BrokerController.sellStocks(req.body.token, req.body.gameID);
    res.json(sellStocks);
})
export default router