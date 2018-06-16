import * as jwt from 'jsonwebtoken';
import config from '../config.json';
export class PlayerController {

  playerList = [];
  
  createPlayer(name) {
    const player = {
      name: name,
      //Additionam properties other than name
    }
    this.playerList.push(player);
    return player;
  }

  getPlayer(name) {
    const Player = this.playerList.find(p => p.name==name)
    if(Player){
      return player;
    }
    else{
      return new Error("No Such Player");
    }
  }

  getPlayerToken(player) {
    const token = jwt.sign(player, config.jwtSecret);
    return token;
  }
  executeTransaction(token,type,amount){
   let p=jwt.decode(token);
   
  let player = this.getPlayer(player.name);
   if(type="withdraw"){
      player.withdraw(amount);
   }
   else{
     player.deposit(amount);
   }
  }
}