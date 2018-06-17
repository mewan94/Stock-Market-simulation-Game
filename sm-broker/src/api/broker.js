
import express from 'express';
import { BrokerController } from "../controllers/broker";

const router = express.Router();
const BrokerController = new BrokerController();



router.post('/', (req, res) => {
    const stock = BrokerController.getStock(req.body.token, req.body.gameID);
    res.json(stock);
})

export default router