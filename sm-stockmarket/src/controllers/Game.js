import * as jwt from 'jsonwebtoken';
import config from '../config.json';

export class Game{

    constructor(token) {
       
        let p = jwt.decode(token);
        let playerName = p.name;

        return playerName;
    }
}