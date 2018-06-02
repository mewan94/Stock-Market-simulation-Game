import express from 'express';
import { PlayerController } from "../controllers/players";

const router = express.Router();
const playerController = new PlayerController();

router.get('/', (req, res) => {
  res.send('hello');
});

router.post('/', (req, res) => {
  const p = playerController.createPlayer(req.body.name); 
  res.json(p); 
})

export default router;