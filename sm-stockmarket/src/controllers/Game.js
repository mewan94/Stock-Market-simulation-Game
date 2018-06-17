import * as jwt from 'jsonwebtoken';
import config from '../config.json';

export class Game{

    decodePlayerName(token) {
       
        let p = jwt.decode(token);
        let playerName = p.name;
        
        Game(playerName);
    }


}